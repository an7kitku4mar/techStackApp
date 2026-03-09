import oracledb from "oracledb";

export async function menuMast(req, res) {
  let connection;

  try {
    connection = await oracledb.getConnection(); // from pool

    const result = await connection.execute(
      `SELECT *
       FROM MENU_MAST
       ORDER BY SNO_IN`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    res.json(result.rows);

  } catch (err) {

    console.error(err);
    res.status(500).send("Database error");

  } finally {

    if (connection) await connection.close();

  }

};