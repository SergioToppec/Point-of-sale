# 🛒 POS-back – Backend del Sistema de Punto de Venta

**POS-back** es el backend de una aplicación completa de **punto de venta (POS)**, construido con **Node.js**, **Express.js** y **SQL Server**. Este sistema permite la gestión integral de productos, ventas, inventario y cortes de caja a través de una **API RESTful**, documentada con **Swagger**.

---

## Características Principales

* Autenticación de usuarios (JWT)
* Gestión de productos e inventario
* Registro y procesamiento de ventas
* Reportes de cortes de caja
* Documentación de API con Swagger
* Estructura modular y escalable

---


## Estructura de Directorios

```
POS-back/
│
├── src/
│   ├── config/
│   ├── middleware/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── utils/
│
├── .env
├── package.json
├── README.md
```

### Descripción de los directorios principales

- **src/config/**: Configuración de la base de datos, JWT y otros parámetros globales.
- **src/middleware/**: Middlewares para autenticación, validación y lógica intermedia.
- **src/controllers/**: Lógica de negocio y controladores para cada módulo del sistema.
- **src/routes/**: Definición de rutas de la API y su vinculación con los controladores.
- **src/models/**: Modelos de datos y esquemas utilizados por la aplicación.
- **src/utils/**: Funciones auxiliares y utilidades generales.

---

##  Tecnologías Utilizadas

* **Node.js**
* **Express.js**
* **SQL Server**
* **Swagger UI**
* **JWT** para autenticación
* **dotenv** para variables de entorno

---

## ⚙️ Instalación y Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/POS-back.git
   cd POS-back
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Crea un archivo `.env` con la siguiente estructura:**

   ```
   PORT=3000
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_SERVER=localhost
   DB_DATABASE=nombre_de_la_bd
   JWT_SECRET=clave_secreta
   ```

4. **Inicia el servidor:**

   ```bash
   node si.js
   ```

5. **Accede a la documentación de la API:**

   ```
   http://localhost:3000/api-docs
   ```

---

## 📌 Endpoints Principales

| Método | Endpoint          | Descripción                |
| ------ | ----------------- | -------------------------- |
| GET    | `/api/productos`  | Obtener lista de productos |
| POST   | `/api/productos`  | Crear nuevo producto       |
| POST   | `/api/auth/login` | Iniciar sesión             |
| POST   | `/api/ventas`     | Registrar una nueva venta  |
| GET    | `/api/cortes`     | Consultar cortes de caja   |

> Consulta todos los endpoints disponibles en `/api-docs`.

---

## Autenticación

El sistema utiliza **JWT** para proteger rutas privadas. Al iniciar sesión, el backend devuelve un token que debe ser enviado en el encabezado `Authorization` como:

```
Bearer tu_token
```

---

## Pruebas

Puedes utilizar **Postman** o cualquier cliente HTTP para probar los endpoints. Se recomienda comenzar autenticándose en `/api/auth/login`.

---

##  Escalabilidad

Este proyecto está preparado para crecer e incluir módulos como:

* Gestión de clientes y proveedores
* Generación de facturas
* Panel de administración con dashboards
* Exportación de reportes (PDF/Excel)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras errores o deseas mejorar el proyecto:

* Abre un issue
* Haz un fork del repositorio
* Crea una nueva rama
* Envía un pull request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

¿Te gustaría que también hiciera el `README` para el frontend o que cree ejemplos de uso reales (por ejemplo, una venta completa)?
