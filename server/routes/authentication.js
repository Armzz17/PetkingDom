import express from "express";
import { requireSignIn } from "../middleware/authentication.js";
import { register, getAllUsers, deleteUserById } from "../controller/authentication.js";

const router = express.Router();

router.post("/register", register);
router.get("/alluser", getAllUsers);
router.delete("/deleteuser/:id", deleteUserById)


export default router;
