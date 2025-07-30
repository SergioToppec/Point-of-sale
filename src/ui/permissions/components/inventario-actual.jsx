import { FiEdit, FiClock } from "react-icons/fi"
import { useState, useEffect } from "react"
import HistorialModal from "../modules/historial-modal"
import GlobalLoader from "../../components/GlobalLoader"
import revotec from "@/assets/icons/revotec.svg"

const InventarioActual = ({ onClose }) => {
  const [showHistorial, setShowHistorial] = useState(false)
  const [redirecting, setRedirecting] = useState(false)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const guardados = localStorage.getItem("productos")
    if (guardados) {
      setProductos(JSON.parse(guardados))
    }
  }, [])

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
            <div className="text-white py-3 px-4 bg-azulOscuro">
              <h1 className="text-lg font-medium">Inventario actual</h1>
            </div>

            <div className="p-3 flex justify-between items-center">
              <button
                onClick={() => setRedirecting(true)}
                className="text-white px-2 py-1 rounded text-xs flex items-center gap-1 transition-all hover:opacity-90 bg-azulOscuro"
              >
                <FiEdit className="w-3 h-3" />
                Editar inventario
              </button>

              <button
                onClick={() => setShowHistorial(true)}
                className="text-white px-2 py-1 rounded text-xs flex items-center gap-1 transition-all hover:opacity-90 bg-azulOscuro"
              >
                <FiClock className="w-3 h-3" />
                Historial de productos
              </button>
            </div>

            <div className="px-3">
              <div className="max-h-[200px] overflow-y-scroll hide-scrollbar border border-black border-opacity-30 rounded-md">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-azulOscuro text-white">
                    <tr>
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

            <div className="p-3 flex justify-end">
              <button
                onClick={onClose}
                className="text-white px-5 py-0.5 rounded text-sm transition-colors bg-rojoFuerte hover:bg-rojoFuerte/90"
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
