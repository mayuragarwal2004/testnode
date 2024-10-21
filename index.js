// Import the express module
const express = require("express");

// Initialize the express application
const app = express();

// Define a port for the server to listen on
const PORT = 3000;

// Create a simple GET route
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello, this is a test route!" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, this is a home route!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
