import oracledb from "oracledb";

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