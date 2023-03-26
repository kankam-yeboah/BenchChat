import { Router } from "express";
import { getLoginUserPage, getRegisterUserPage, loginUser, createNewUser } from "../controllers/AuthController.js";

const router = Router();

// GET /auth/login
router.get("/login", getLoginUserPage);
// GET /auth/register
router.get("/register", getRegisterUserPage);

// POST /auth/login
router.post("/login", loginUser);
router.post("/register", createNewUser);

export default router;
