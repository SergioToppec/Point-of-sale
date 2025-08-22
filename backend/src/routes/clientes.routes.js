const express = require('express');
const router = express.Router();
const {
    getClientes,
    addCliente,
    putCliente,
    patchCliente
} = require('../controllers/clientes.controller');

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/', getClientes);

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - codigo_de_cliente
 *               - razon_social
 *               - RFC
 *               - domicilio_fiscal
 *               - regimen
 *               - email
 *             properties:
 *               codigo_de_cliente:
 *                 type: string
 *                 example: C001
 *               razon_social:
 *                 type: string
 *                 example: Comercializadora Sol S.A. de C.V.
 *               RFC:
 *                 type: string
 *                 example: COSX901231AB1
 *               domicilio_fiscal:
 *                 type: string
 *                 example: Calle Sol #123, Col. Centro, CDMX
 *               regimen:
 *                 type: int
 *                 example: 601
 *               email:
 *                 type: string
 *                 format: email
 *                 example: contacto@comercializadora.com
 *     responses:
 *       201:
 *         description: Cliente creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/', addCliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *   patch:
 *     summary: Actualiza parcialmente los datos de un cliente
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo_de_cliente:
 *                 type: string
 *                 example: C001
 *               razon_social:
 *                 type: string
 *                 example: Comercializadora Sol S.A. de C.V.
 *               RFC:
 *                 type: string
 *                 example: COSX901231AB1
 *               domicilio_fiscal:
 *                 type: string
 *                 example: Calle Sol #123, Col. Centro, CDMX
 *               regimen:
 *                 type: int
 *                 example: 601
 *               email:
 *                 type: string
 *                 format: email
 *                 example: contacto@comercializadora.com
 *     responses:
 *       200:
 *         description: Cliente actualizado correctamente
 *       400:
 *         description: Datos inválidos o ID incorrecto
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/:id', patchCliente);

module.exports = router