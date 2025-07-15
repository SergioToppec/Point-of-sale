import { FiEdit, FiClock } from "react-icons/fi"
import { useState } from "react"
import HistorialModal from "../modules/historial-modal"
import GlobalLoader from "../../components/GlobalLoader"
import revotec from "@/assets/icons/revotec.svg"

const InventarioActual = ({ onClose }) => {
  const [showHistorial, setShowHistorial] = useState(false)
  const [redirecting, setRedirecting] = useState(false)

  const productos = [
    { clave: "501234567890", descripcion: "Coca cola desechable 600 ml", cantidad: 35, precio: 19.5 },
    { clave: "501234567891", descripcion: "Pepsi lata 355 ml", cantidad: 18, precio: 15.0 },
    { clave: "501234567892", descripcion: "Fanta 500 ml", cantidad: 25, precio: 16.0 },
    { clave: "501234567893", descripcion: "Sprite 600 ml", cantidad: 30, precio: 17.5 },
    { clave: "501234567894", descripcion: "Agua Ciel 1L", cantidad: 20, precio: 12.0 },
    { clave: "501234567895", descripcion: "Monster Energy 473 ml", cantidad: 10, precio: 29.0 },
    { clave: "501234567896", descripcion: "Red Bull 250 ml", cantidad: 15, precio: 26.5 },
    { clave: "501234567897", descripcion: "Jumex Mango 500 ml", cantidad: 22, precio: 14.0 },
    { clave: "501234567898", descripcion: "Boing Fresa 500 ml", cantidad: 18, precio: 13.0 },
    { clave: "501234567899", descripcion: "Lipton Limón 600 ml", cantidad: 16, precio: 15.0 },
    { clave: "501234567900", descripcion: "Arizona Sandía 680 ml", cantidad: 12, precio: 24.0 },
    { clave: "501234567901", descripcion: "Powerade Azul 600 ml", cantidad: 19, precio: 17.0 },
    { clave: "501234567902", descripcion: "Gatorade Rojo 600 ml", cantidad: 21, precio: 17.0 },
    { clave: "501234567903", descripcion: "Sidral Mundet 600 ml", cantidad: 14, precio: 18.0 },
    { clave: "501234567904", descripcion: "7Up 600 ml", cantidad: 13, precio: 17.5 },
  ]

  return (
    <>
      {redirecting && (
        <GlobalLoader
          message="Redirigiendo a inventario"
          duration={2000}
          redirectTo="/dashboard/products"
          logo={revotec}
        />
      )}

      {!redirecting && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
            {/* Header */}
            <div className="text-white py-3 px-4" style={{ backgroundColor: "#395886" }}>
              <h1 className="text-lg font-medium">Inventario actual</h1>
            </div>

            {/* Botones */}
            <div className="p-3 flex justify-between items-center">
              <button
                onClick={() => setRedirecting(true)}
                className="text-white px-2 py-1 rounded text-xs flex items-center gap-1 transition-all hover:opacity-90"
                style={{ backgroundColor: "#395886" }}
              >
                <FiEdit className="w-3 h-3" />
                Editar inventario
              </button>

              <button
                onClick={() => setShowHistorial(true)}
                className="text-white px-2 py-1 rounded text-xs flex items-center gap-1 transition-all hover:opacity-90"
                style={{ backgroundColor: "#395886" }}
              >
                <FiClock className="w-3 h-3" />
                Historial de productos
              </button>
            </div>

            {/* Tabla con scroll oculto y encabezado sticky */}
            <div className="px-3">
              <div className="max-h-[200px] overflow-y-scroll hide-scrollbar border border-black border-opacity-30 rounded-b-md">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10">
                    <tr style={{ backgroundColor: "#395886", color: "white" }}>
                      <th className="px-3 py-2 text-center font-medium rounded-tl-md">Clave producto</th>
                      <th className="px-3 py-2 text-center font-medium">Descripción</th>
                      <th className="px-3 py-2 text-center font-medium">Cantidad</th>
                      <th className="px-3 py-2 text-center font-medium rounded-tr-md">Precio</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {productos.map((producto, index) => (
                      <tr key={index} className="border-b border-black border-opacity-30">
                        <td className="px-3 py-2 text-xs text-black text-center">{producto.clave}</td>
                        <td className="px-3 py-2 text-xs text-black text-center">{producto.descripcion}</td>
                        <td className="px-3 py-2 text-xs text-black text-center">{producto.cantidad}</td>
                        <td className="px-3 py-2 text-xs text-black text-center">${producto.precio.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Botón Salir */}
            <div className="p-3 flex justify-end">
              <button
                onClick={onClose}
                className="text-white px-5 py-0.5 rounded text-sm transition-colors"
                style={{ backgroundColor: "#B21613" }}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {showHistorial && <HistorialModal onClose={() => setShowHistorial(false)} />}
    </>
  )
}

export default InventarioActual
