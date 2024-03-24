import express from 'express';
import gameControllers from '../controllers/gameControllers.js';

const router = express.Router();

// @route GET && POST -/posts
router
.route("/")
.get(gameControllers.getAllGames)
.post(gameControllers.createNewGame);

router.route("/:id").get(gameControllers.getGameById);

export default router;
