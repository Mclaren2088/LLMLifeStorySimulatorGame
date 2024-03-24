import express from 'express';
import postControllers from '../controllers/postControllers.js';

const router = express.Router();

// @route GET && POST -/posts
router
.route("/")
.get(postControllers.getAllGames)
.post(postControllers.createNewGame);

router.route("/:id").get(postControllers.getGameById);

export default router;
