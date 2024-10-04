const express = require('express');
const { connectToDatabase } = require('./Config/Connection'); // Import the connection function

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to SQL Server database
connectToDatabase();

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
