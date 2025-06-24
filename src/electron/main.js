// Este archivo es el punto de entrada para la aplicación Electron.
// Aquí se configura la ventana principal y se carga la aplicación web.

const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

// Verifica si la aplicación se está ejecutando en modo de desarrollo

const isDev = !app.isPackaged;

//Esta función es la encargada de crear la ventana principal de la aplicación
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: nativeImage.createFromPath(path.join(__dirname, '../assets/logos/Revotec_logo.png')), // Establece el icono de la ventana en la barra de tareas
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Deshabilita el aislamiento de contexto para permitir el uso de Node.js en la ventana
    },
  });


//Esto es para poder trabajar con cambios de estilos y código en tiempo real
const startURL = isDev
  ? 'http://localhost:5173'
    : `file://${path.join(__dirname, '../../dist/index.html')}`;

    mainWindow.loadURL(startURL)

//Es oppcional, abre DevTools si la aplicación se está ejecutando en modo de desarrollo
    if (isDev){
      mainWindow.webContents.openDevTools();
    }
};

// Este evento se dispara cuando la aplicación está lista para crear ventanas
// Aquí es donde se llama a la función createWindow para crear la ventana principal
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Este evento se dispara cuando todas las ventanas de la aplicación están cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});