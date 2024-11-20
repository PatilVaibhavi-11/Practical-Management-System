import mongoose from 'mongoose';  
  
const enrolSchema=mongoose.Schema({  
    practicals:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"subject",  
        required:true  
    },  
    student:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"student",  
        required:true  
    }  
  
})  
  
const enrolModel=mongoose.model("enrol",enrolSchema);  
  
export default enrolModel; 