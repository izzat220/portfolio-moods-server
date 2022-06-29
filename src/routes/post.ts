import { Router } from "express";

//Routes Import
import { create, get, getStats } from "../controllers/post";

const router = Router();

//Routes Endpoints
router.post("/create", create);
router.get("/get", get);
router.get("/getStats", getStats);

export default router;
