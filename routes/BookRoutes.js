// ???
import express from "express";
import {
  deleteBook,
  detailBook,
  TambahData,
  TampilSemuaBook,
  updateBook,
} from "../controllers/BookController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// CRUD routes
router.post("/book", isAuthenticated, TambahData);
router.get("/book", TampilSemuaBook);
router.get("/book/:id", detailBook);
router.put("/book/:id", isAuthenticated, updateBook);
router.delete("/book/:id", isAuthenticated, deleteBook);

export default router;
