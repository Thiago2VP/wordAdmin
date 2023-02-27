import { Router } from "express";
import wordsController from "../controllers/Words";

const router = new Router();

router.get("/", wordsController.index);
router.get("/:id", wordsController.search);
router.put("/", wordsController.edit);
router.post("/", wordsController.insert);
router.delete("/:id", wordsController.delete);

export default router;
