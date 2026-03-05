import oracledb from "oracledb";
import dotenv from "dotenv";
dotenv.config();
oracledb.fetchAsString = [ oracledb.CLOB ];
export async function connectDB() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      connectString: process.env.DB_CONNECT,
      poolMin: 5,
      poolMax: 20,
      poolIncrement: 5
    });

    console.log("✅ Oracle DB Pool Created");
  } catch (err) {
    console.error("❌ DB Pool Error:", err);
    process.exit(1);
  }
}

