import express from "express";
import { login, register } from "../controllers/auth";

const router = express.Router();

router.route("/register").get(register);
router.route("/login").get(login);

export default router;
