import enrol from '../models/enrol.js';  
import Practical from '../models/practical.js';  
import mongoose from 'mongoose';
  
export const enrolment = async (req, res) => {  
  try {  
    console.log("Request Body:", req.body); 

    const { practicals, student } = req.body;  
  
    // Validate required fields
    if (!practicals || !student) {
      return res.status(400).json({ message: "Practical and student IDs are required" });
    }

    // Validate ObjectId format for practicals and student
    if (!mongoose.Types.ObjectId.isValid(practicals) || !mongoose.Types.ObjectId.isValid(student)) {
      return res.status(400).json({ message: "Invalid practical or student ID" });
    }

    const enrols = new enrol({  
      practicals,  
      student,  
    });  
  
    const savedenrols =await enrols.save();  
  
    const updatedpracticals = await Practical.findByIdAndUpdate(  
      practicals,  
      { $push: { enrols: savedenrols._id } },  
      { new: true }  
    )  
    .populate("enrols")  
    .exec();  
  
    if (!updatedpracticals) {
      return res.status(404).json({ message: "Practical not found" });
    }

    res.json({  
       practicals: updatedpracticals  
    })  
  } catch (error) { 
    console.log(error) 
    return res.status(500).json({  
        error: "Error while enrolling practicals",  
    }); 
  }  
};  
