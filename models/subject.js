import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  createdBy: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "practical",
  },],
});

const SubjectModel = mongoose.model("Subject", SubjectSchema);

export default SubjectModel;
