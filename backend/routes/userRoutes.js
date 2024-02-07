import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { signupUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { logoutUser } from "../controllers/userController.js";
import { followUnfollowUser } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;
