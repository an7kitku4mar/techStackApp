// server.js

import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import homeRoutes from "./routes/homepageRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use("/users", userRoutes);
app.use("/home", homeRoutes);

export default app;