const sql = require('mssql');
require('dotenv').config(); // Load environment variables

// Database configuration
const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER, // Optional if using Integrated Security
    password: process.env.DB_PASSWORD, // Optional if using Integrated Security
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true', // Parse to boolean
        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true', // Parse to boolean
        instanceName: process.env.DB_INSTANCE  // This handles the MSSQLLocalDB instance
    }
};

// Function to connect to SQL Server
const connectToDatabase = async () => {
    try {
        // Connect to SQL Server using the configuration
        await sql.connect(dbConfig);
        console.log('Connected to the SQL Server database.');
    } catch (err) {
        console.error('Database connection failed: ', err);
    }
};

module.exports = {
    connectToDatabase,
    sql
};
