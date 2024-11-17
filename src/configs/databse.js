import mongoose from "mongoose";

export default async function dbConnection() {
    mongoose.connect(process.env.DB_CONN)
    return mongoose.connection
}