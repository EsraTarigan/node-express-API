import express from "express";
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


//route default /users
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
