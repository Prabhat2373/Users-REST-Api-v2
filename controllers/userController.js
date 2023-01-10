import { User } from "../model/userModel.js"
import csv from "csv-express";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "SUCCESS",
            payload: users
        })
    } catch (err) {
        res.status(400).json({
            status: "BAD REUEST",
            message: err.message
        })
    }

}

export const CreateUser = async (req, res, next) => {
    try {
        const NewUser = await User.create({
            name: req.body.name,
            status: req.body.status,
            role: req.body.role,
            lastLogin: req.body.lastLogin
        });
        res.status(201).json({
            status: "SUCCESS",
            message: "User Created Successfully",
            payload: NewUser
        });
    } catch (err) {
        res.status(400).json({
            status: "BAD REUEST",
            message: err.message
        })
    }
}
export const DownloadCSV = async (req, res, next) => {
    try {
        var filename = "users.csv";
        var dataArray;
        User.find().select("-__v").lean().exec({}, function (err, users) {
            if (err) res.send(err);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader("Content-Disposition", 'attachment; filename=' + filename);
            res.csv(users, true);
        });
    } catch (err) {
        res.status(400).json({
            status: "BAD REUEST",
            message: err.message
        })
    }
}
export const UpdateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const user = await User.findByIdAndUpdate(id, {
            name: req.body.name,
            role: req.body.role,
        }, {
            new: true
        })
        res.status(200).json({
            status: "SUCCESS",
            message: "User Has Been Updated",
            payload: user
        })
    } catch (err) {
        res.status(400).json({
            status: "BAD REUEST",
            message: err.message
        })
    }
}
export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndRemove(id);
        res.status(204).json({
            status: "SUCCESS",
            message: "User Has Been Deleted",
            payload: user
        })
    } catch (err) {
        res.status(400).json({
            status: "BAD REUEST",
            message: err.message
        })

    }
}