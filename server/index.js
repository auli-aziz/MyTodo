import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import TodoRoute from "./routes/TodoRoute.js"
import { connectDatabase } from "./config/db.js";

const PORT = process.env.PORT || 3001;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDatabase();

app.use(TodoRoute)

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}...`));