import { Router } from "express";
import {
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer,
    linkPlayerParent,
    getParents,
    deleteParentLink
} from "../controllers/players.controllers.js";

const router = Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.get("/link/:id", getParents);
router.post("/", createPlayer);
router.post("/link", linkPlayerParent);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);
router.delete("/link/:id", deleteParentLink);

export default router;
