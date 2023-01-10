import express from "express";
import { CreateUser, DeleteUser, DownloadCSV, UpdateUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    });
})
router.get("/users", getAllUsers)
router.route("/user").post(CreateUser)
router.route("/user/:id").put(UpdateUser).delete(DeleteUser)
router.get("/exportCSV", DownloadCSV)
export default router;