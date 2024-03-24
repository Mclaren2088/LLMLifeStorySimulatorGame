import express from 'express';
import llmControllers from '../controllers/llmControllers.js';

const router = express.Router();
// @route GET && POST -/posts
router
.route("/")
.get(llmControllers.openNewSession)
.post(llmControllers.openPrevSession);

export default router;
