const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Replace with your MySQL username
    password: "", // Replace with your MySQL password
    database: "user_management",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to the MySQL database");
});

// Register API
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, results) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).send("Username or email already exists");
            }
            console.error(err);
            return res.status(500).send("Error registering user");
        }
        res.status(201).send("User registered successfully");
    });
});

// Login API
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error logging in");
        }

        if (results.length === 0) {
            return res.status(400).send("Invalid username or password");
        }
        res.status(200).send("Login successful");
    });
});

// Edit User API
app.put("/edit", (req, res) => {
    const { username, newUsername, newEmail, newPassword } = req.body;

    const query = `
        UPDATE users 
        SET username = ?, email = ?, password = ? 
        WHERE username = ?`;
    db.query(query, [newUsername, newEmail, newPassword, username], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error updating user");
        }

        if (results.affectedRows === 0) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User updated successfully");
    });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
