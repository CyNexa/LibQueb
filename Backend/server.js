// server.js
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  ssl: {
    ca: fs.readFileSync(process.env.DB_SSL_CA_PATH).toString()
  }
});

// 🧩 Import and mount search routes
const searchRoutes = require("./Routes/search")(pool);
app.use(searchRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
