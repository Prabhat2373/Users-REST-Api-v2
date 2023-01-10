import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String,
    },
    role: {
        type: String,
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    }
})

export const User = mongoose.model("users", UserSchema);

