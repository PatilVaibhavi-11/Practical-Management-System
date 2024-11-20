import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/feedbackRoutes.js";

const app = express();

const PORT = 3111;

app.use(express.json());

//mounting api routes
app.use("/api/v1",router)

dotenv.config();
const startServer = async () => {
await dbConnect();


app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});
};

startServer();
