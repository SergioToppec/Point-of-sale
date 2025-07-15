"use client"

const HistorialModal = ({ onClose }) => {
  const historialData = [
    { clave: "501234567890", descripcion: "Coca cola desechable 600 ml", cantidad: 35, precio: 19.5, fecha: "17/06/2025" },
    { clave: "501234567891", descripcion: "Pepsi 355 ml", cantidad: 22, precio: 16.0, fecha: "18/06/2025" },
    { clave: "501234567892", descripcion: "Sprite 600 ml", cantidad: 15, precio: 18.0, fecha: "19/06/2025" },
    { clave: "501234567893", descripcion: "Agua Ciel 1L", cantidad: 20, precio: 12.0, fecha: "20/06/2025" },
    { clave: "501234567894", descripcion: "Red Bull 250 ml", cantidad: 10, precio: 26.5, fecha: "21/06/2025" },
    { clave: "501234567895", descripcion: "Fanta Uva 600 ml", cantidad: 18, precio: 17.0, fecha: "22/06/2025" },
    { clave: "501234567896", descripcion: "Jumex Mango 500 ml", cantidad: 12, precio: 14.5, fecha: "23/06/2025" },
    { clave: "501234567897", descripcion: "Boing Guayaba 500 ml", cantidad: 14, precio: 13.5, fecha: "24/06/2025" },
    { clave: "501234567898", descripcion: "Monster Verde 473 ml", cantidad: 9, precio: 29.0, fecha: "25/06/2025" },
    { clave: "501234567899", descripcion: "Gatorade Azul 600 ml", cantidad: 17, precio: 17.0, fecha: "26/06/2025" },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
        {/* Header */}
        <div className="text-white py-3 px-4" style={{ backgroundColor: "#395886" }}>
          <h1 className="text-lg font-medium">Historial</h1>
        </div>

        {/* Tabla con scroll y encabezado sticky */}
        <div className="p-3">
          <div className="max-h-[200px] overflow-y-scroll hide-scrollbar border border-black border-opacity-30 rounded-b-md">
            <table className="w-full border-collapse text-sm">
              <thead className="sticky top-0 z-10">
                <tr style={{ backgroundColor: "#395886", color: "white" }}>
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

        {/* Botón Salir mismo tamaño que antes */}
        <div className="p-3 flex justify-end">
          <button
            onClick={onClose}
            className="text-white px-5 py-0.5 rounded text-sm transition-colors rounded-[10px]"
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
