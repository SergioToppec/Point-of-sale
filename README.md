# Sistema de Punto de Venta Modular para Gestión Integral de Tiendas

Este proyecto es una aplicación de escritorio desarrollada con **Electron**, **React**, **Vite** y **Tailwind CSS**, pensada para operar de forma modular y escalable. Su objetivo es ofrecer una solución integral para comercios, incluyendo funcionalidades de venta, facturación, devoluciones, control de inventario, gestión de clientes, reportes y configuraciones de periféricos.

---

## Características Clave

* Aplicación 100% de escritorio (compatible hasta Windows 7 con Electron v22).
* Arquitectura modular por dominio de negocio.
* Estructura escalable y mantenible.
* Integración con periféricos (impresoras, lectores de código, balanzas).
* Reportes financieros y exportación.
* Estilos con TailwindCSS y layouts adaptables.
* Base de datos local con SQLServer.
* Backend con Express para API REST.

---

## Tecnologías Utilizadas

* **Electron v22**: Plataforma base para apps de escritorio.
* **React + Vite**: Frontend moderno y veloz.
* **Tailwind CSS v3**: Estilado utilitario y responsivo.
* **Zustand**: Manejo de estado simple y escalable.
* **SQLServer**: Almacenamiento offline.
* **Express**: Backend para API REST.
* **XState (opcional)**: Modelado de flujos como ventas y devoluciones.

---

## Estructura del Proyecto

```bash
src/
├── assets/                      # Recursos estáticos (logos, fuentes, íconos)
│   ├── fonts/                   # Fuentes personalizadas (Poppins)
│   ├── icons/                   # Íconos
│   └── logos/                   # Logotipos
│
├── config/                      # Configuración global
│   └── routes/                  # Rutas protegidas y públicas
│
├── core/                        # Lógica transversal reusable
│   ├── api/                     # Conexión a servicios/API/electronBridge
│   ├── hooks/                   # Hooks globales
│   ├── utils/                   # Helpers y validadores
│   └── types/                   # Tipos globales
│
├── electron/                    # Lógica nativa (Electron)
│   ├── main.js                  # Punto de entrada
│   ├── hardware/                # Lectura de periféricos (balanzas, cajones)
│   └── storage/                 # DB local, archivos offline
│
├── modules/                     # Módulos de negocio (autenticación, ventas, etc.)
│   ├── auth/                    # Inicio de sesión y roles
│   ├── billing/                 # Facturación y devoluciones
│   ├── clients/                 # Gestión de clientes
│   ├── products/                # Inventario
│   ├── reports/                 # Reportes financieros
│   ├── sales/                   # Flujo de venta POS
│   └── settings/                # Configuración general
│
├── store/                       # Zustand store global (auth, caja, productos)
│
├── ui/                          # Interfaz visual y componentes
│   ├── auth/                    # Pantallas y componentes de autenticación
│   ├── clients/                 # Pantallas y componentes de clientes
│   ├── components/              # Botones, modales, campos
│   ├── dashboard/               # Vista del dashboard
│   ├── layout/                  # AppLayout, Header, Sidebar
│   ├── pos/                     # Vista específica POS
│   ├── reports/                 # Pantallas y componentes de reportes
│   ├── settings/                # Configuración visual
│   └── startup/                 # Pantalla inicial de carga
│
├── index.html                   # Archivo principal HTML
│
│
└── tailwind.config.js           # Añadir estilos personalizados


```

---

## Configuración de TailwindCSS

El archivo `tailwind.config.js` ha sido personalizado para incluir:

* **Colores personalizados**: Se añadieron colores específicos para la marca.
* **Fuentes**: Uso de la familia de fuentes `Poppins`.

Ejemplo de configuración:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

---

## Conexión con el Backend

El backend utiliza **Express** para manejar las rutas y **SQLServer** como base de datos. La estructura básica es la siguiente:

```javascript
const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

// Configuración de SQLServer
const dbConfig = {
  user: 'usuario',
  password: 'contraseña',
  server: 'localhost',
  database: 'nombre_base_datos',
};

// Endpoint de ejemplo
app.get('/api/products', async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query('SELECT * FROM Products');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('Backend corriendo en http://localhost:3000'));
```

---

## Instalación del Proyecto

### Requisitos Previos:

* Node.js 18+
* Git
* Windows 7+ o sistema compatible

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/punto-de-venta.git
cd point-of-sale
```

### Instalación de dependencias

```bash
npm install
```

---

## Comandos de Ejecución

### Desarrollo (modo navegador, solo frontend)

```bash
npm run dev
```

### Build para escritorio

```bash
npm run build
```

### Ejecutar la app de escritorio (modo Electron)

```bash
npm run electron
```

---

## Flujo General del Sistema

1. **Login**: Validación de usuario y rol.
2. **Inicio**: Se abre la aplicación con prefijo de caja o tienda.
3. **Dashboard**: Vista general de ventas activas.
4. **POS**: Agregar productos, cobrar, generar ticket.
5. **Facturación**: Emitir factura electrónica con validación.
6. **Reportes**: Visualizar cortes, ventas, devoluciones.
7. **Configuración**: Parámetros, periféricos, roles.

---

## Licencia

Este proyecto es de uso privado para fines académicos o empresariales. Puedes extenderlo con módulos adicionales o adaptar la arquitectura según tus necesidades.

---

**Desarrollado por Sergio Torres, Arturo Ortiz y Josué Un.**

© Todos los derechos reservados. Los Derechos de este Manual se encuentran reconocidos
por la Ley Federal del Derecho de Autor. Se prohíbe su producción, reproducción, publicación, edición o fijación
material en copias o ejemplares, por cualquier medio, importación, almacenamiento, transporte, distribución,
comercialización, venta o arrendamiento, así como su comunicación y transmisión pública por cualquier medio,
su divulgación en cualquier modalidad, su traducción, adaptación, paráfrasis, arreglos, transformaciones u otras
similares, sin previa autorización por escrito de su titular. La violación de esta prohibición constituyen un delito
y una infracción administrativa que están sancionados conforme a los artículos 424 fracción III, 424 bis fracción I
y 424 ter, del Código Penal Federal; así como los artículos 229 fracciones VII y XVI y 231 fracciones I, III, IV y X,
de la Ley Federal del Derecho de Autor y demás normas aplicables vigentes.
