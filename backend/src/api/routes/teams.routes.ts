import { Router } from "express";
import {
    getTeams,
    getAllData,
    getPlayers,
    getCoaches,
    getTrainingDays,
    createTeam,
    updateTeam,
    deleteTeam,
} from "../controllers/teams.controllers.js";

const router = Router();

router.get("/", getTeams);
router.get("/:id", getAllData);
router.get("/players/:id", getPlayers);
router.get("/coaches/:id", getCoaches);
router.get("/training-days/:id", getTrainingDays);
router.post("/", createTeam)
router.put("/:id", updateTeam)
router.delete("/:id", deleteTeam)

export default router;
