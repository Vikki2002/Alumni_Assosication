import { Router } from "express";
import { login, register } from "../../controllers/auth-controller/auth.controllers";
import { protect, roleAuth } from "../../middlewares/auth-middleware/authMiddleware";
// import { protect, roleAuth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register as any);
router.post("/login", login as any);
router.get("/protected", protect as any, (req, res) => void res.json({ message: "Protected route" }));
router.get("/admin", protect as any, roleAuth(["admin"]) as any, (req, res) => void res.json({ message: "Admin route" }));

export default router;
