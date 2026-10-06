import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";
import bookRouter from "./routes/bookRoutes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/book", bookRouter);
app.use("/books", bookRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello From Baccha's Bookstore Server",
  });
});

app.use((req, res, next) => {
  next(new HttpError("Requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err.message);
    process.exit(1);
  }
};

startServer();
