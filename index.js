import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import { getAllUsers } from './controllers/userController.js';
import router from "./routes/userRoutes.js";
const PORT = process.env.PORT || 8001;

const app = new express();

mongoose.connect("mongodb://127.0.0.1:27017/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log("DB CONNECTION SUCCESS")).catch((err) => console.log("ERRR", err.message))

app.use(bodyParser.json());
app.use(express.json())
app.use("/api/v1/",router)
// app.get("users", getAllUsers)

app.listen(PORT, () => console.log(`Server is ON http://localhost:${PORT}`))