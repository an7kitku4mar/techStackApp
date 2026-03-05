// index.js

import dotenv from "dotenv";
import app from "./server.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const port = 3000;

async function startServer() {
  await connectDB();  // 🔥 create pool first

  app.listen(port, () => {
    console.log(`🚀 From index.js Server running on http://localhost:${port}`);
  });
}

startServer();