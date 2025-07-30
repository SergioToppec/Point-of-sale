import { useEffect, useState } from "react"

const HistorialModal = ({ onClose }) => {
  const [historialData, setHistorialData] = useState([])

  useEffect(() => {
    const historialGuardado = localStorage.getItem("historial")
    if (historialGuardado) {
      setHistorialData(JSON.parse(historialGuardado))
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
        {/* Header */}
        <div className="bg-azulOscuro text-white py-3 px-4">
          <h1 className="text-lg font-medium">Historial</h1>
        </div>

        {/* Tabla de eso */}
        <div className="p-3">
          <div className="max-h-[200px] overflow-y-scroll hide-scrollbar border border-black border-opacity-30 rounded-b-md">
            <table className="w-full border-collapse text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="bg-azulOscuro text-white">
                  <th className="px-3 py-2 text-center font-medium rounded-tl-[7px]">Clave producto</th>
                  <th className="px-3 py-2 text-center font-medium">Descripción</th>
                  <th className="px-3 py-2 text-center font-medium">Cantidad</th>
                  <th className="px-3 py-2 text-center font-medium">Precio</th>
                  <th className="px-3 py-2 text-center font-medium rounded-tr-[7px]">Fecha de registro</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {historialData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-3 py-6 text-center text-gray-500">
                      No hay historial registrado
                    </td>
                  </tr>
                ) : (
                  historialData.map((item, index) => (
                    <tr key={index} className="border-b border-black border-opacity-30 last:border-b-0">
                      <td className="px-3 py-2 text-xs text-black text-center">{item.clave}</td>
                      <td className="px-3 py-2 text-xs text-black text-center">{item.descripcion}</td>
                      <td className="px-3 py-2 text-xs text-black text-center">{item.cantidad}</td>
                      <td className="px-3 py-2 text-xs text-black text-center">${item.precio.toFixed(2)}</td>
                      <td className="px-3 py-2 text-xs text-black text-center">{item.fecha}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Botón salir */}
        <div className="p-3 flex justify-end">
          <button
            onClick={onClose}
            className="bg-rojoFuerte text-white px-5 py-0.5 rounded text-sm transition-colors rounded-[10px]"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistorialModal
