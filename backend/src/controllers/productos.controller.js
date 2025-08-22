const { poolConnect, sql, pool } = require('../config/db');

const getProductos = async (req, res) => {
    await poolConnect;

    try {
        const request = pool.request();
        // Consulta para obtener productos con sus detalles;
        const result = await request.query(`
        SELECT 
            p.ID,
            p.nombre_producto,
            p.precio,
            p.cantidad,
            u.unidad_de_medida,
            a.nombre_almacen,
            a.direccion,
            p.codigo_barras,
            p.clave_sat
        FROM Productos p
        JOIN Unidades_de_medida u ON p.id_unimedida = u.ID
        JOIN Almacenes a ON p.almacen = a.ID
    `);
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error('Error al obtener productos', err);
        res.status(500).json({ error: 'Error internal server error' })

    }
};

const getProductoById = async (req, res) => {
    await poolConnect;
    const { id } = req.params;

    try {
        const request = pool.request();
        request.input('id', sql.Int, id);

        const result = await request.query(`
            SELECT 
                p.ID,
                p.nombre_producto,
                p.precio,
                p.cantidad,
                u.unidad_de_medida,
                a.nombre_almacen,
                a.direccion,
                p.codigo_barras,
                p.clave_sat
            FROM Productos p
            JOIN Unidades_de_medida u ON p.id_unimedida = u.ID
            JOIN Almacenes a ON p.almacen = a.ID
            WHERE p.ID = @id
        `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json(result.recordset[0]);
    } catch (err) {
        console.error('Error al obtener producto por ID:', err);
        res.status(500).json({ error: 'Error al obtener producto' });
    }
}

const addProducto = async (req, res) => {
    await poolConnect;

    const {
        nombre_producto,
        precio,
        id_unimedida,
        codigo_barras,
        clave_sat,
        almacen,
        cantidad
    } = req.body;

    try {

        // Validación: unidad de medida
        const unidad = await pool.request()
            .input('id_unimedida', sql.Int, id_unimedida)
            .query('SELECT ID FROM Unidades_de_medida WHERE ID = @id_unimedida');
        if (unidad.recordset.length === 0) {
            return res.status(400).json({ error: 'ID de unidad de medida no válido' });
        }

        // Validación: almacén
        const alm = await pool.request()
            .input('almacen', sql.Int, almacen)
            .query('SELECT ID FROM Almacenes WHERE ID = @almacen');
        if (alm.recordset.length === 0) {
            return res.status(400).json({ error: 'ID de almacén no válido' });
        }

        // instancia para el insert
        const insert = pool.request();
        await insert
            .input('nombre_producto', sql.VarChar(50), nombre_producto)
            .input('precio', sql.Decimal(10, 2), precio)
            .input('id_unimedida', sql.Int, id_unimedida)
            .input('codigo_barras', sql.VarChar(50), codigo_barras)
            .input('clave_sat', sql.VarChar(20), clave_sat)
            .input('almacen', sql.Int, almacen)
            .input('cantidad', sql.Int, cantidad)
            .query(`
                INSERT INTO Productos (
                nombre_producto, precio,
                id_unimedida, codigo_barras,
                clave_sat, almacen, cantidad
                ) VALUES (
                @nombre_producto, @precio,
                @id_unimedida, @codigo_barras,
                @clave_sat, @almacen, @cantidad
                )
        `);

        res.status(201).json({ mensaje: 'Producto agregado correctamente' });

    } catch (err) {
        console.error('Error al agregar producto:', err);
        res.status(500).json({ error: 'Error al agregar producto' });
    }
};

const putProducto = async (req, res) => {
    await poolConnect;

    const { id } = req.params;
    const {
        nombre_producto,
        precio,
        id_unimedida,
        codigo_barras,
        clave_sat,
        almacen,
        cantidad
    } = req.body;

    try {
        const request = pool.request();

        // Validación: unidad de medida
        const unidad = await pool.request()
            .input('id_unimedida', sql.Int, id_unimedida)
            .query('SELECT ID FROM Unidades_de_medida WHERE ID = @id_unimedida');
        if (unidad.recordset.length === 0) {
            return res.status(400).json({ error: 'ID de unidad de medida no válido' });
        }

        // Validación: almacén
        const alm = await pool.request()
            .input('almacen', sql.Int, almacen)
            .query('SELECT ID FROM Almacenes WHERE ID = @almacen');
        if (alm.recordset.length === 0) {
            return res.status(400).json({ error: 'ID de almacén no válido' });
        }

        // Actualización del producto
        await request
            .input('id', sql.Int, id)
            .input('nombre_producto', sql.VarChar(50), nombre_producto)
            .input('precio', sql.Decimal(10, 2), precio)
            .input('id_unimedida', sql.Int, id_unimedida)
            .input('codigo_barras', sql.VarChar(50), codigo_barras)
            .input('clave_sat', sql.VarChar(20), clave_sat)
            .input('almacen', sql.Int, almacen)
            .input('cantidad', sql.Int, cantidad)
            .query(`
                UPDATE Productos SET
                nombre_producto = @nombre_producto,
                precio = @precio,
                id_unimedida = @id_unimedida,
                codigo_barras = @codigo_barras,
                clave_sat = @clave_sat,
                almacen = @almacen,
                cantidad = @cantidad
                WHERE ID = @id
            `);

        res.status(200).json({ mensaje: 'Producto actualizado correctamente' });

    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

const patchProducto = async (req, res) => {
    await poolConnect;
    const { id } = req.params;
    const campos = req.body;

    if (!id || Object.keys(campos).length === 0) {
        return res.status(400).json({ error: 'ID de producto o campos a actualizar no válidos' });
    }

    const camposValidos = [
        'nombre_producto', 'precio', 'id_unimedida', 'codigo_barras', 'clave_sat', 'almacen', 'cantidad'
    ];

    const setClauses = [];
    const request = pool.request();
    request.input('id', sql.Int, id);

    camposValidos.forEach((columna) => {
        if (campos[columna] !== undefined) {
            setClauses.push(`${columna} = @${columna}`);
            if (columna === 'precio') {
                request.input(columna, sql.Decimal(10, 2), campos[columna]);
            } else if (columna === 'id_unimedida' || columna === 'almacen' || columna === 'cantidad') {
                request.input(columna, sql.Int, campos[columna]);
            } else {
                request.input(columna, sql.VarChar(50), campos[columna]);
            }
        }

    })

    try {
        const query = `
            UPDATE Productos
            SET ${setClauses.join(', ')}
            WHERE ID = @id
        `;

        await request.query(query);
        res.status(200).json({ mensaje: 'Producto actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
}

module.exports = {
    getProductos,
    getProductoById, 
    addProducto,
    putProducto,
    patchProducto
}