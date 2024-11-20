import PracticalModel from '../models/practical.js';  
import SubjectModel from '../models/subject.js';
import subject from '../models/subject.js';   
import mongoose from "mongoose";
export const createPractical = async (req, res) => {  
  try {  
    console.log("Request body:", req.body);

    const { subjectId, title, description,createdBy, enrolledStudents } = req.body;  
    console.log("subjectId:", subjectId, "Type:", typeof subjectId);
    console.log("Received subjectId:", req.body.subjectId);

    if (typeof subjectId === "object" && subjectId.subjectId) {
      subjectId = subjectId.subjectId; // Extract actual ID
    }

    console.log("Processed subjectId:", subjectId);

    if (!mongoose.Types.ObjectId.isValid(subjectId)) {
      return res.status(400).json({ message: "Invalid subjectId provided" });
    }
    const subjectinfo= await SubjectModel.findById(subjectId);
    if(!subjectinfo){
      return res.status(404).json({message:"subject not found"});
    }

    const practicalObj = new PracticalModel({  
      subjectId,  
      title,  
      description,
      createdBy,
      enrolledStudents  
    });  
   
    const savedpractical = await practicalObj.save();  
   
    const updatedsubject =await SubjectModel.findByIdAndUpdate(subjectId,  
      { $push: { practicals: savedpractical._id } },  { new: true }  
    )  .populate("practicals")  .exec();  
   
    mongoose.set("strictPopulate", false);


    res.status(201).json({ message :"practical created successfully",subject: updatedsubject });  
  } catch (error) { 
    console.error("Error while adding practical:", error.message); 
    res.status(500).json({ 
      message: "Error while adding practical", 
      error: error.message || "Unknown error occurred"  });
   /* res.status(500).json({ message: "Error while adding subject ",error }); */ 
  }  
};  
   
export const getAllpracticals=async(req,res)=>{  
  try{  
    const practicals=await PracticalModel.find()  
    res.json({  
      practicals  
})  
}  
catch(error)  
{  
return res.status(400).json({ 
error:"error while fetching post",  
})  
}  
} 