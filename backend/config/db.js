import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv:/name:password.hvz5awy.mongodb.net/FOOD-DEL'))
    console.log("DB Connected");
}
