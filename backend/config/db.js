import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://Aditya:crkgcr8299@cluster0.hvz5awy.mongodb.net/FOOD-DEL'))
    console.log("DB Connected");
}