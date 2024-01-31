const express = require("express");
const { pool } = require("../config/db");

const router = express.Router();

/* GET todos los posts */
router.get("/posts", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM posts");
    res.json(rows);
  } catch (error) {
    console.error("Error ejecutando solicitud de GET:", error);
    res.status(500).send("Error 500 Internal Server Error");
  }
});

/* POST crear un nuevo post */
router.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  console.log("Received data:", titulo, url, descripcion);

  if (!titulo || !url || !descripcion) {
    console.log("Error 400. Se requieren todos los campos.");
    return res
      .status(400)
      .json({ error: "Error 400. Se requieren todos los campos." });
  }

  try {
    const { rows } = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [titulo, url, descripcion]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error("Error ejecutando solicitud de POST:", error);
    res.status(500).send("Error 500 Internal Server Error");
  }
});

module.exports = router;
