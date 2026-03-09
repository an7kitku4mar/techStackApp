import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";
import personalRoutes from "./routes/personalRoutes.js";

const app = express();

/* Middleware */

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(cookieParser());

/* Routes */

app.use("/auth", authRoutes);
app.use("/public", publicRoutes);
app.use("/personal", personalRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Homepage</h1>");
});

export default app;