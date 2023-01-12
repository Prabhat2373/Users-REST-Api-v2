import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import router from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors"
const PORT = 8001 || process.env.PORT;
dotenv.config({
    path: "./config.env"
})

const app = new express();
const DB = process.env.DB_CLUSTER.replace("<password>", process.env.DB_PASS);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log("DB CONNECTION SUCCESS")).catch((err) => console.log("ERRR", err.message))

app.use(bodyParser.json());
app.use(express.json())
app.use(cors())
app.use("/api/v1/", router)
// app.get("users", getAllUsers)

app.listen(PORT, () => console.log(`Server is ON http://localhost:${PORT}`))