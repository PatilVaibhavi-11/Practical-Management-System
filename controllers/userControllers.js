import User from "../models/user.js"

export const createUser=async (req, res) => {
  try {
    const { name, email, password,role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "User created successfully"
    });

  } catch (error) {
    res.json({
      error: "Error occured",
    });

    console.log(error)
  }
};


  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

  export const getAllAdmins = async (req, res) => {
    try {
      // Filter users by role "Admin"
      const admins = await User.find({ role: "Admin" });
  
      // Respond with the filtered admin users
      res.json({
        message: "Admins fetched successfully",
        admins,
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({
        error: "Cannot fetch admin data",
      });
      console.error(error);
    }
  };
  
  export const getAllTeachers = async (req, res) => {
    try {
      const admins = await User.find({ role: "Teacher" });
      res.json({
        message: "teachers fetched successfully",
        admins,
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({
        error: "Cannot fetch data",
      });
      console.error(error);
    }
  };

  export const getAllStudents = async (req, res) => {
    try {
      const admins = await User.find({ role: "Student" });
  
      res.json({
        message: "students fetched successfully",
        admins,
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({
        error: "Cannot fetch data",
      });
      console.error(error);
    }
  };
  