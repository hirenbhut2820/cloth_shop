import express, { Express } from "express";
import routes from "./routes/index.routes";
import dotenv from "dotenv";
import { connection } from "./models/db";
import cors from "cors";
dotenv.config();
const app: Express = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json({}))
app.use(express.urlencoded({extended: false}))
app.use("/", routes);

connection.connectDB();

app.listen(PORT, () => console.log("express running at " + PORT))