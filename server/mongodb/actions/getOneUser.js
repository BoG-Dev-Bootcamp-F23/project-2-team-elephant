import connectDB from "../index.js";
import User from "../models/User.js";

export default async function getOneUser(id) {
    try {
        await connectDB();
        const users = await User.findById(id);
        const name = users.fullName;
        return name;
    } catch (e) {
        console.log(e);
        throw new Error("Unable to create user. Invalid data or database issue.");
    }
}