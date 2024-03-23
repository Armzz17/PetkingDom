import mongoose from "mongoose";

// Define a schema for a "User" document
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    role: { type: Number, default: 0}
});

// Create a Mongoose model based on the schema
export default mongoose.model('User', userSchema);


