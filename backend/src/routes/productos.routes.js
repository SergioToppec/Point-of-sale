const express = require('express');
const router = express.Router();
const {
    getProductos,
    addProducto,
    putProducto,
    patchProducto,
    getProductoById
} = require('../controllers/productos.controller');

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', getProductos);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a consultar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ID:
 *                   type: integer
 *                 nombre_producto:
 *                   type: string
 *                 precio:
 *                   type: number
 *                 cantidad:
 *                   type: integer
 *                 unidad_de_medida:
 *                   type: string
 *                 nombre_almacen:
 *                   type: string
 *                 direccion:
 *                   type: string
 *                 codigo_barras:
 *                   type: string
 *                 clave_sat:
 *                   type: string
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', getProductoById);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_producto:
 *                 type: string
 *               precio:
 *                 type: number
 *               id_unimedida:
 *                 type: integer
 *               codigo_barras:
 *                 type: string
 *               clave_sat:
 *                 type: string
 *               almacen:
 *                 type: integer
 *               cantidad:
 *                type: integer
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 *       400:
 *         description: Error de validación
 */
router.post('/', addProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualiza un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre_producto
 *               - precio
 *               - id_unimedida
 *               - codigo_barras
 *               - clave_sat
 *               - almacen
 *               - cantidad
 *             properties:
 *               nombre_producto:
 *                 type: string
 *               precio:
 *                 type: number
 *                 format: float
 *               id_unimedida:
 *                 type: integer
 *               codigo_barras:
 *                 type: string
 *               clave_sat:
 *                 type: string
 *               almacen:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 *       400:
 *         description: Error en los datos enviados
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', putProducto);

/**
 * @swagger
 * /api/productos/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar parcialmente
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_producto:
 *                 type: string
 *               precio:
 *                 type: number
 *               id_unimedida:
 *                 type: integer
 *               codigo_barras:
 *                 type: string
 *               clave_sat:
 *                 type: string
 *               almacen:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *             example:
 *               precio: 129.99
 *               cantidad: 15
 *     responses:
 *       200:
 *         description: Producto actualizado parcialmente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch('/:id', patchProducto);

module.exports = router;
