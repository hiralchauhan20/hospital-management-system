import express from "express";
import {
  addDoctor,
  adminDashboard,
  allDoctor,
  appoinmentCancel,
  appointmentAdmin,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { loginAdmin } from "../controllers/adminController.js";
import { changeAvailablity } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor); //authAdmin ,
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctor);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
adminRouter.get("/appointments", authAdmin, appointmentAdmin);
adminRouter.post("/cancel-appointment", authAdmin, appoinmentCancel);
adminRouter.get("/dashboard", authAdmin, adminDashboard);
export default adminRouter;
