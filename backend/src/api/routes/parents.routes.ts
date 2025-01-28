import { Router } from "express";
import { linkPlayerParent } from "../controllers/players.controllers.js";
import {
    getParents,
    getParentById,
    createParent,
    updateParent,
    deleteParent,
    getChildren,
    deletePlayerLink
} from "../controllers/parents.controllers.js";

const router = Router();

router.get("/", getParents);
router.get("/:id", getParentById);
router.get("/link/:id", getChildren);
router.post("/", createParent);
router.post("/link", linkPlayerParent);
router.put("/:id", updateParent);
router.delete("/:id", deleteParent);
router.delete("/link/:id", deletePlayerLink);

export default router;
