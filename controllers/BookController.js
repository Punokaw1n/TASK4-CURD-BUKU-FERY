import Book from "../models/BookModel.js";
import mongoose from "mongoose";

// CRUD
const TambahData = async (req, res) => {
  const { title, author, rilis } = req.body;

  // Cek apakah buku dengan judul yang sama sudah ada
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    return res.status(400).json({
      status: "Failed",
      message: "Nama buku tidak boleh sama",
    });
  }
  try {
    const newBook = await Book.create(req.body);
    return res.status(200).json({
      status: "Success",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.errors,
    });
  }
};

const TampilSemuaBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const detailBook = async (req, res) => {
  const { id } = req.params;

  // Validasi ID buku
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "Failed",
      message: "ID buku tidak valid",
    });
  }

  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return response.status(404).json({
        status: "Failed",
        message: "ID buku tidak ditemukan",
      });
    }
    return res.status(200).json({
      status: "Success",
      message: book,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      status: "Success",
      data: updateBook,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      message: `data berhasil di hapus ${deleteBook}`,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
export { TambahData, TampilSemuaBook, detailBook, updateBook, deleteBook };
