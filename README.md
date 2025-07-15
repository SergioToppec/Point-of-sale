# Sistema de Punto de Venta Modular para Gestión Integral de Tiendas

Este proyecto es una aplicación de escritorio desarrollada con  **Electron** ,  **React** , **Vite** y  **Tailwind CSS** , pensada para operar de forma modular y escalable. Su objetivo es ofrecer una solución integral para comercios, incluyendo funcionalidades de venta, facturación, devoluciones, control de inventario, gestión de clientes, reportes y configuraciones de periféricos.

---

## Características Clave

* Aplicación 100% de escritorio (compatible hasta Windows 7 con Electron v22).
* Arquitectura modular por dominio de negocio.
* Estructura escalable y mantenible.
* Integración con periféricos (impresoras, lectores de código, balanzas).
* Reportes financieros y exportación.
* Estilos con TailwindCSS y layouts adaptables.
* Base de datos local con SQServer.

---

## Tecnologías Utilizadas

* **Electron v22** : Plataforma base para apps de escritorio.
* **React + Vite** : Frontend moderno y veloz.
* **Tailwind CSS v3** : Estilado utilitario y responsivo.
* **Zustand** : Manejo de estado simple y escalable.
* **SQLServer**: Almacenamiento offline.
* **XState (opcional)** : Modelado de flujos como ventas y devoluciones.

---

## Estructura del Proyecto

```bash
src/
├── modules/                     # Módulos de negocio (auténticación, ventas, etc.)
│   ├── auth/                    # Inicio de sesión y roles
│   ├── sales/                   # Flujo de venta POS
│   ├── billing/                 # Facturación y devoluciones
│   ├── products/                # Inventario
│   ├── customers/               # CRM básico
│   ├── reporting/               # Reportes financieros
│   └── system/                  # Configuración general
│
├── core/                        # Lógica transversal reusable
│   ├── api/                     # Conexión a servicios/API/electronBridge
│   ├── hooks/                   # Hooks globales
│   ├── utils/                   # Helpers y validadores
│   └── types/                   # Tipos globales
│
├── store/                       # Zustand store global (auth, caja, productos)
│
├── assets/                      # Recursos estáticos (logos, iconos)
│
├── ui/                          # Interfaz visual y componentes
│   ├── layout/                  # AppLayout, AuthLayout
│   ├── components/              # Botones, modales, campos
│   └── pos/                     # Vista específica POS
│
├── config/                      # Constantes, rutas protegidas
│
└── electron/                    # Lógica nativa (Electron)
    ├── main.js                  # Punto de entrada
    ├── hardware/                # Lectura de periféricos (balanzas, cajones)
    └── storage/                 # DB local, archivos offline
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

1. **Inicio** : Se abre la aplicación con prefijo de caja o tienda.
2. **Login** : Validación de usuario y rol.
3. **Dashboard** : Vista general de ventas activas.
4. **POS** : Agregar productos, cobrar, generar ticket.
5. **Facturación** : Emitir factura electrónica con validación.
6. **Reportes** : Visualizar cortes, ventas, devoluciones.
7. **Configuración** : Parámetros, periféricos, roles.

---

## Consideraciones Adicionales

* La carpeta `dist/` se genera con `vite build`. No la edites manualmente.
* Se puede empaquetar con `electron-builder` o `electron-packager` (no incluido en este repo).

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
