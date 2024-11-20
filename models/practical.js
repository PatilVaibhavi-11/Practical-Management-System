import mongoose from 'mongoose';  
import { title } from 'process';

const PracticalSchema=mongoose.Schema({  
    subjectId:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:'subject',  
        required:true,  
    },  
    title:{  
        type:String,  
        required:true  
    },  
    description:{  
        type:String,  
        required:true  
    },  
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:'teacher',  
        required:true, 
    },
    enrolledStudents:[{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:'student'  
    }]  
})  
  
const PracticalModel=mongoose.model("Practical",PracticalSchema);  
  
export default PracticalModel; 