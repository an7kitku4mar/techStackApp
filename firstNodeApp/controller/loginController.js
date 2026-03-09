import oracledb from "oracledb";
import { saveRefreshToken } from "../models/tokenModel.js";
import { accessTokenGen, refreshTokenGen } from "../utils/tokenUtils.js";

export async function loginForm (req, res){
  let connection;
  try {
    connection = await oracledb.getConnection();
    console.log(req.body);
    const {category, sno, password} = req.body;

    const result = await connection.execute (`SELECT * FROM USERS_ON_REACT WHERE CATEGORY = :category AND SNO = :sno AND PASSWORD = :password` , {category,sno,password}, { outFormat: oracledb.OUT_FORMAT_OBJECT } );
    if (!result.rows || result.rows.length === 0 ) 
      {return res.status(401).json({message: "User Unauthorized"})
      };
    
      const user = result.rows[0];
      const accessToken = accessTokenGen(user);
      const refreshToken = refreshTokenGen(user);

      await saveRefreshToken(connection, user.SNO, refreshToken);
      await connection.commit();
      res.cookie("refreshToken", refreshToken, {
                  httpOnly: true,
                  secure: false, // true in production (HTTPS)
                  sameSite: "Strict",
                  maxAge: 3600000
                });
      
      return res.json({ accessToken });          
  }
catch (err) {
  console.error("❌ Full Error:", err);

  return res.status(500).json({
    message: "Database error",
    error: err.message   // ✅ only message
  });

  } finally {
    if (connection) await connection.close();
  }
}