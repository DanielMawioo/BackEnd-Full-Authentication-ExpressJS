const express = require("express");
const app = express();
const connectToMongoDB = require("./config/db");

// Accept incoming request
app.use(express.json({ extended: false }));

// Connect to MongoDB
connectToMongoDB();

// Run the server
app.listen(5000, () => console.log(`Server running in 5000`));