import mongoose from "mongoose";
mongoose.set("strictPopulate", false);
const dbConnect=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL)
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;
