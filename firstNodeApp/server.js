import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

export default async function startServer() {
  try {

    await connectDB();
    console.log("✅ Database Connected");

    app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Startup Error:", error);
    process.exit(1);
  }
}