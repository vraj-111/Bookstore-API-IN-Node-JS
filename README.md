# 📚 Book Store API

A RESTful Book Store API built using **Node.js, Express.js, and MongoDB**.
This API provides functionality to manage books with CRUD operations.


<img width="1917" height="1027" alt="Screenshot 2026-10-06 143927" src="https://github.com/user-attachments/assets/5c2b2b16-0740-4391-a038-4b13f75084b2" />
<img width="1917" height="1017" alt="Screenshot 2026-10-06 145301" src="https://github.com/user-attachments/assets/a83d7264-2873-4262-834f-6543444fe8d3" />
<img width="1917" height="1017" alt="Screenshot 2026-10-06 145831" src="https://github.com/user-attachments/assets/d27c1388-7b4d-448d-8ee7-0bb34566a862" />
<img width="1917" height="1027" alt="Screenshot 2026-10-06 145614" src="https://github.com/user-attachments/assets/cdf776e7-0fd5-4278-b97e-7ec82c462e60" />

---

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Postman
* Nodemon

---

## 📁 Project Structure

```text
Book Store API/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── bookController.js
│
├── middleware/
│   └── httpError.js
│
├── models/
│   └── bookModel.js
│
├── routes/
│   └── bookRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Installation

### 1. Clone the project

```bash
git clone <your-github-repository-url>
```

### 2. Go to project directory

```bash
cd "Book Store API"
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bookstore
```

> Do not upload your `.env` file to GitHub.

---

## ▶️ Run the Project

### Development mode

```bash
npm run dev
```

### Normal mode

```bash
npm start
```

If everything is working correctly, the server will run on:

```text
http://localhost:5000
```

---

# 📖 API Endpoints

## 1. Get All Books

**GET**

```text
/api/books
```

Returns all books from the database.

### Response

```json
{
  "success": true,
  "books": []
}
```

---

## 2. Get Single Book

**GET**

```text
/api/books/:id
```

Example:

```text
GET /api/books/68abc123
```

Returns a single book using its MongoDB ID.

---

## 3. Add New Book

**POST**

```text
/api/books
```

### Request Body

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299,
  "category": "Novel",
  "quantity": 10
}
```

### Response

```json
{
  "success": true,
  "message": "Book added successfully",
  "book": {}
}
```

---

## 4. Update Book

**PUT**

```text
/api/books/:id
```

### Request Body

```json
{
  "title": "The Alchemist Updated",
  "price": 349
}
```

Updates the existing book information.

---

## 5. Delete Book

**DELETE**

```text
/api/books/:id
```

Example:

```text
DELETE /api/books/68abc123
```

Deletes a book from the database.

---

# 🧪 Testing With Postman

You can test all API endpoints using **Postman**.

### GET

```text
GET http://localhost:5000/api/books
```

### POST

```text
POST http://localhost:5000/api/books
```

Select:

```text
Body → raw → JSON
```

Then send:

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "category": "Self Help",
  "quantity": 5
}
```

---

# 🗄️ Database

This project uses **MongoDB** as the database.

Mongoose is used to connect Node.js with MongoDB.

Example connection:

```javascript
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
```

---

# 📦 Important Dependencies

Install the required packages:

```bash
npm install express mongoose dotenv
```

For development:

```bash
npm install --save-dev nodemon
```

---

# 🧩 Middleware

Middleware is a function that runs between the request and response.

Example:

```javascript
app.use(express.json());
```

`express.json()` allows Express to read JSON data from the request body.

---

# 🔄 CRUD Operations

This API supports all major CRUD operations:

| Operation | HTTP Method | Purpose        |
| --------- | ----------- | -------------- |
| Create    | POST        | Add a new book |
| Read      | GET         | Get books      |
| Update    | PUT         | Update a book  |
| Delete    | DELETE      | Delete a book  |

---

# 🛡️ Error Handling

The API uses error handling middleware to handle invalid routes and server errors.

Example:

```javascript
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;
  next(error);
});
```

---

# 🔒 .gitignore

Create a `.gitignore` file:

```text
node_modules/
.env
```

This prevents sensitive and unnecessary files from being uploaded to GitHub.

---

# 📝 NPM Scripts

Example `package.json` scripts:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Run development server:

```bash
npm run dev
```

---

# 🎯 Features

* ✅ Create Book
* ✅ Get All Books
* ✅ Get Single Book
* ✅ Update Book
* ✅ Delete Book
* ✅ MongoDB Database
* ✅ Mongoose ODM
* ✅ Express.js REST API
* ✅ Environment Variables
* ✅ Error Handling
* ✅ Postman API Testing

---

# 👨‍💻 Author

**Vraj Desai**

Full Stack Web Developer

---

## 📌 Project Purpose

This project was created to practice and demonstrate:

* Node.js
* Express.js
* REST API
* MongoDB
* Mongoose
* CRUD Operations
* Middleware
* Error Handling
* API Testing with Postman
