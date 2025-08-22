require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');
const clientesRoutes = require('./routes/clientes.routes');

app.get('/', (req, res) => {
    res.send('Bienvenido al backend del sistema POS');
});

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto al origen de tu frontend
    credentials: true // Permite el envío de cookies y encabezados de autorización
}));
app.use(express.json());

//rutas
app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);

//swagger config
require('./swagger')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});