import {
    createUser,
    getAllUsers,
    getAllStudents,
    getAllAdmins,
    getAllTeachers
  } from "../controllers/userControllers.js";
  import {
    createSubject,
    getSubject,
  } from "../controllers/subjectControllers.js";
  import {
    createPractical,
    getAllpracticals,
  } from "../controllers/practicalControllers.js";
  import { enrolment } from "../controllers/enrolControllers.js";
  import express from "express";
  import { isAdmin , isTeacher } from "../middeleware/middleware.js";
  
console.log('Current directory:', process.cwd());

  
  const router = express.Router();
  
  router.post("/users/create", createUser);
  router.post("/subject/create", isAdmin, createSubject);
  router.post("/practical/create", isTeacher, createPractical);
  router.post("/practicals/enroll", enrolment);
  router.get("/user/get", isAdmin,getAllUsers);
  router.get("/subject/get", getSubject);
  router.get("/practicals/get",getAllpracticals);
  router.get("/admins/get",isAdmin,getAllAdmins);
  router.get("/teachers/get",isAdmin,getAllTeachers);
  router.get("/students/get",isAdmin,isTeacher,getAllStudents);
  
  export default router;
