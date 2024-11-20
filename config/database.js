import mongoose from "mongoose";
mongoose.set("strictPopulate", false);
const dbConnect=async()=>{
    try {
       await mongoose.connect("mongodb+srv://vaibhavipa02:Vaibhavi2011@practicalcluster.rdlzm.mongodb.net/PracticalManagement")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;