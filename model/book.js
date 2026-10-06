import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },

    authorName: {
      type: String,
      required: true,
      trim: true,
    },

    bookDescription: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;