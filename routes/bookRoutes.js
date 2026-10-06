import express from "express";
import multer from "multer";

import bookControllers from "../controllers/bookControllers.js";

const router = express.Router();
const parseFormData = multer().none();

router.post("/create", parseFormData, bookControllers.create);

router.get("/allBooks", bookControllers.getAllBooks);

router.get("/bookbyId/:id", bookControllers.bookById);

router.delete("/deleteBook/:id", bookControllers.deleteBook);

export default router;