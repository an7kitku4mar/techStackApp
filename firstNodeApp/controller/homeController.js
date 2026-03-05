import oracledb from "oracledb";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import session from 'express-session';

// GET ALL USERS
export async function chiefData(req, res) {
  let connection;

  try {
    connection = await oracledb.getConnection();

    const result = await connection.execute(
      `SELECT * FROM CAS_ABOUT`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }  // 👈 Important
    );


    const rows = [];

    for (let row of result.rows) {
      // Assuming BLOB column name is IMAGE
      if (row.PHOTO) {
        const lob = row.PHOTO;

        const chunks = [];
        for await (const chunk of lob) {
          chunks.push(chunk);
        }

        const buffer = Buffer.concat(chunks);
        row.PHOTO = buffer.toString("base64");  // Convert to base64
      }

      rows.push(row);
    }

    res.status(200).json(rows);

    // res.status(200).json(result.rows);

  } catch (err) {
  console.error("❌ Full Error:", err);

  res.status(500).json({
    message: "Database error",
    error: err.message   // ✅ only message
  });

  } finally {
    if (connection) await connection.close();
  }
}
const JWT_SECRET = 'secret123';

export async function loginForm (req, res){
  let connection;
  try {
    connection = await oracledb.getConnection();
    console.log(req.body);
    const {category, sno, password} = req.body;

    const result = await connection.execute (`SELECT * FROM USERS_ON_REACT WHERE CATEGORY = :category AND SNO = :sno AND PASSWORD = :password` , {category,sno,password}, { outFormat: oracledb.OUT_FORMAT_OBJECT } );
    if (!result.rows || result.rows.length === 0 ) 
      {return res.status(404).json({message: "User not found"})
      };
      console.log (result.rows[0].PASSWORD);
    
    if (password == result.rows[0].PASSWORD){
        const token = jwt.sign({sno:result.rows[0].SNO, category: result.rows[0].CATEGORY, createDate: result.rows[0].CREATED_DATE}, JWT_SECRET, {expiresIn: '1h'});
        const {password, ...userData } = result.rows[0];
        res.json({token, user: userData});
    } else {
          res.status(401).json({message: "Invalid Crednetials"});
    }
  }
catch (err) {
  console.error("❌ Full Error:", err);

  res.status(500).json({
    message: "Database error",
    error: err.message   // ✅ only message
  });

  } finally {
    if (connection) await connection.close();
  }
}