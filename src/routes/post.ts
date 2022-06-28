import { Router } from "express";

//Routes Import
import { create, get } from "../controllers/post";

const router = Router();

//Routes Endpoints
router.post("/create", create);
router.get("/get", get);

export default router;
