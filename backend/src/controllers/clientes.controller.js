const { poolConnect, sql, pool } = require('../config/db');

const getClientes = async (req, res) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT * FROM Clientes
            `)
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error('Error al obtener clientes', err);
        res.status(500).json({ error: 'Error internal server error' });
    }
};

const addCliente = async (req, res) => {
    await poolConnect;

    const {
        codigo_de_cliente,
        razon_social,
        RFC,
        domicilio_fiscal,
        regimen,
        email
    } = req.body

    try {
        //instancia para el insert
        const insert = pool.request();
        await insert
            .input('codigo_de_cliente', sql.VarChar, codigo_de_cliente)
            .input('razon_social', sql.VarChar, razon_social)
            .input('RFC', sql.VarChar, RFC)
            //cambiar el tipo de dato a int ya que en la base de datos debería ser int
            .input('domicilio_fiscal', sql.VarChar, domicilio_fiscal)
            .input('regimen', sql.Int, regimen)
            .input('email', sql.VarChar, email)
            .query(`
                INSERT INTO Clientes (
                codigo_de_cliente, razon_social, 
                RFC, domicilio_fiscal, regimen, email)
                VALUES (
                @codigo_de_cliente, @razon_social, @RFC,
                @domicilio_fiscal, @regimen, @email)
            `);

        res.status(201).json({ message: 'Cliente creado correctamente' });
    } catch (err) {
        console.error('Error al crear cliente', err);
        res.status(500).json({ error: 'Error internal server error' });
    }
};

const patchCliente = async (req, res) => {
    await poolConnect;
    const { id } = req.params;
    const campos = req.body;

    if (!id || Object.keys(campos).length === 0) {
        return res.status(400).json({ error: 'ID del cliente o campos a actualizar no válidos' });
    }

    const camposValidos = [
        'codigo_de_cliente',
        'razon_social',
        'RFC',
        'domicilio_fiscal',
        'email',
        'regimen'
    ];

    const setClauses = [];
    const request = pool.request();
    request.input('id', sql.Int, id);

    camposValidos.forEach((columna) => {
        if (campos[columna] !== undefined) {
            setClauses.push(`${columna} = @${columna}`);

            if (columna === 'regimen') {
                request.input(columna, sql.Int, parseInt(campos[columna]));
            } else {
                request.input(columna, sql.VarChar(100), campos[columna]);
            }
        }
    });

    if (setClauses.length === 0) {
        return res.status(400).json({ error: 'Ningún campo válido para actualizar' });
    }

    try {
        const query = `
            UPDATE Clientes
            SET ${setClauses.join(', ')}
            WHERE ID = @id
        `;

        await request.query(query);
        res.status(200).json({ mensaje: 'Cliente actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar cliente:', err);
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
};


module.exports = {
    getClientes,
    addCliente,
    patchCliente
}