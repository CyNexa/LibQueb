// search.js
const express = require("express");
const router = express.Router();


module.exports = (pool) => {
  router.post("/api/search", async (req, res) => {
    const { query } = req.body;

    if (!query || !query.trim()) {
      return res.status(400).json({ error: "Query is required." });
    }

    try {
      const sql = `
        SELECT
          i.title,
          i.description,
          i.language,
          i.created_at,
          t.name AS type
        FROM items i
        JOIN item_types t ON i.type_id = t.id
        WHERE LOWER(i.title) LIKE LOWER(?)
      `;
      const params = [`%${query}%`];

      const [rows] = await pool.query(sql, params);

      res.json({ results: rows });
    } catch (err) {
      console.error("❌ Search error:", err);
      res.status(500).json({ error: "Server error." });
    }
  });

  return router;
};
