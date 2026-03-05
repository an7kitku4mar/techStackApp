import oracledb from "oracledb";

export async function registerUser(req, res) {
  const { username, email, password } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(); // from pool

    await connection.execute(
      `INSERT INTO USERS_ON_REACT (USERNAME, EMAIL, PASSWORD)
       VALUES (:username, :email, :password)`,
      { username, email, password },
      { autoCommit: true }
    );

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({ message: "Database error" });

  } finally {
    if (connection) await connection.close(); // return to pool
  }
}