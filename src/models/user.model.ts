import mongoose from "mongoose";
import { email, lowercase, maxLength, minLength, trim } from "zod";
import { required } from "zod/mini";

interface IUser {
    name: string,
    email: string,
    password: string,
    address: string
}

const userScheme = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        minLength: 6,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            "Please enter a valid email address",
        ],

    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6
    },
    address: {
        type: String,
        
    }

})

const User = mongoose.model('User', userScheme);

export default User;