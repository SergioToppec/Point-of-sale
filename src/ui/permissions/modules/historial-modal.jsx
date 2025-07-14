"use client"

const HistorialModal = ({ onClose }) => {
  const historialData = [
    {
      clave: "501234567890",
      descripcion: "Coca cola desechable 600 ml",
      cantidad: 35,
      precio: 19.5,
      fecha: "17/06/2025",
    },
    {
      clave: "501234567891",
      descripcion: "Pepsi 355 ml",
      cantidad: 22,
      precio: 16.0,
      fecha: "18/06/2025",
    },
    {
      clave: "501234567892",
      descripcion: "Sprite 600 ml",
      cantidad: 15,
      precio: 18.0,
      fecha: "19/06/2025",
    },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
        {/* Header */}
        <div className="text-white py-3 px-4" style={{ backgroundColor: "#395886" }}>
          <h1 className="text-lg font-medium">Historial</h1>
        </div>

        {/* Tabla 1 unica tabla */}
        <div className="p-3">
          <div className="border border-black border-opacity-30 overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr
                  className="text-white text-xs"
                  style={{
                    backgroundColor: "#395886",
                    borderTopLeftRadius: "7px",
                    borderTopRightRadius: "7px",
                  }}
                >
                  <th className="px-3 py-2 text-center font-medium rounded-tl-[7px]">Clave producto</th>
                  <th className="px-3 py-2 text-center font-medium">Descripción</th>
                  <th className="px-3 py-2 text-center font-medium">Cantidad</th>
                  <th className="px-3 py-2 text-center font-medium">Precio</th>
                  <th className="px-3 py-2 text-center font-medium rounded-tr-[7px]">Fecha de registro</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {historialData.map((item, index) => (
                  <tr key={index} className="border-b border-black border-opacity-30 last:border-b-0">
                    <td className="px-3 py-2 text-xs text-black text-center">{item.clave}</td>
                    <td className="px-3 py-2 text-xs text-black text-center">{item.descripcion}</td>
                    <td className="px-3 py-2 text-xs text-black text-center">{item.cantidad}</td>
                    <td className="px-3 py-2 text-xs text-black text-center">${item.precio.toFixed(2)}</td>
                    <td className="px-3 py-2 text-xs text-black text-center">{item.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Botón Salir gg */}
        <div className="p-3 flex justify-end">
          <button
            onClick={onClose}
            className="text-white px-4 py-1 rounded text-sm transition-colors rounded-[10px]"
            style={{ backgroundColor: "#B21613" }}
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistorialModal
