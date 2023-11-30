import connectDB from "../index.js";
import User from "../models/User.js";

export default async function verifyUser(data) {
    try {
        await connectDB();
        const bcrypt = require("bcryptjs");
        const users = await User.find({email: data.email});
        console.log(users);
        console.log(users.forEach((user) => console.log(bcrypt.compareSync(data.password, user.password))));
        return users.filter((user) => bcrypt.compareSync(data.password, user.password));
    } catch (e) {
        console.log(e);
        return {};
    }
}