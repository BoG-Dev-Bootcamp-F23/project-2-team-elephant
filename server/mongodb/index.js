import mongoose from "mongoose";

export default async function connectDB() {
    if (mongoose.connections[0].readyState) return;

    await mongoose
        .connect(process.env.DB_URL, {
            dbName: process.env.DB_NAME,
        })
        .catch((e) => {
            console.error("Error connecting to database.");
            throw e;
        });
};

