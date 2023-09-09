import { pool } from "../db.js";

export const agregarProducto = async (req, res) => {
  try {
    const { nombre, id_marca, precio, cantidad } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO productos (nombre, id_marca, precio, cantidad) VALUES (?, ?, ?, ?)",
      [nombre, id_marca, precio, cantidad]
    );
    res
      .status(201)
      .json({ id: rows.insertId, nombre, id_marca, precio, cantidad });
  } catch (error) {
    return res.status(500).json({ message: "Algo falló" });
  }
};

export const mostrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "El producto no existe" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const mostrarProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo falló" });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, id_marca, precio, cantidad } = req.body;

    const [result] = await pool.query(
      "UPDATE productos SET nombre = IFNULL(?, nombre), id_marca = IFNULL(?, id_marca), precio = IFNULL(?, precio), cantidad = IFNULL(?, cantidad) WHERE id = ?",
      [nombre, id_marca, precio, cantidad, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "No se encontró el producto" });

    const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Fatallity" });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM productos WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "No se encontró el producto" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Algo falló" });
  }
};
