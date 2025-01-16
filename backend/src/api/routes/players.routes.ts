import { Router } from "express";
import { getPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer } from "../controllers/players.controllers.js";

const router = Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.post("/", createPlayer);
router.put("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;
