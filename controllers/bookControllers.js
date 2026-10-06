import HttpError from "../middleware/HttpError.js";
import Book from "../model/book.js";
import mongoose from "mongoose";


const create = async (req, res, next) => {
  try {
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      return next(new HttpError("Request body must contain book details", 400));
    }

    const { bookName, authorName, bookDescription } = req.body;

    if (!bookName) {
      return next(new HttpError("Book name is required", 400));
    }

    if (!authorName) {
      return next(new HttpError("Author name is required", 400));
    }

    const newBookData = await Book.create({
      bookName,
      authorName,
      bookDescription,
    });

    return res.status(201).json({
      success: true,
      message: "New book added successfully",
      data: newBookData,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({})

    if (books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No book data found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "All book data fetched successfully",
      total: books.length,
      data: books,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const bookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new HttpError("Invalid book id", 400));
    }

    const book = await Book.findById(id);

    if (!book) {
      return next(new HttpError("No book data found with this id", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Book data found",
      data: book,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new HttpError("Invalid book id", 400));
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return next(new HttpError("No book found with this id", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    return next(new HttpError(error.message, 500));
  }
};

export default {
  create,
  getAllBooks,
  bookById,
  deleteBook,
};
