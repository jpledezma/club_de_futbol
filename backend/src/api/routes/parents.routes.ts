import { Router } from "express";
import { getParents, getParentById, createParent, updateParent, deleteParent } from "../controllers/parents.controllers.js";

const router = Router();

router.get("/", getParents);
router.get("/:id", getParentById);
router.post("/", createParent);
router.put("/:id", updateParent);
router.delete("/:id", deleteParent);

export default router;
