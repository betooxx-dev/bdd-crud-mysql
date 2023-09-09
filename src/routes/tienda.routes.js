import { Router } from "express";
import {
  agregarProducto,
  mostrarProducto,
  mostrarProductos,
  actualizarProducto,
  eliminarProducto
} from "../controllers/tienda.controller.js";

const router = Router();

// Obtener todos los productos
router.get("/productos", mostrarProductos);

// Obtener un producto
router.get("/producto/:id", mostrarProducto);

// Eliminar un producto
router.delete("/product/:id", eliminarProducto);

// Agregar un producto
router.post("/productos", agregarProducto);

// Actualizar un producto
router.put("/productos/:id", actualizarProducto);

export default router;
