import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
const PORT = 8001 || process.env.PORT;
import router from "./routes/userRoutes"

const app = new express();

mongoose.connect("mongodb://127.0.0.1:27017/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log("DB CONNECTION SUCCESS")).catch((err) => console.log("ERRR", err.message))

app.use(bodyParser.json());
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server is ON http://localhost:${PORT}`))