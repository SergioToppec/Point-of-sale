import ExportarPDFExcel from "../../components/exportar-pdf-excel"


const ReporteVentasTicket = ({ onClose }) => {
  // Datos de ejemplo para reporte por ticket
  const ticketsData = [
    {
      fecha: "15/08/2025",
      nTicket: "F001-025",
      codigoCliente: "C001",
      cte: "PÚBLICO GRAL",
      cantidad: 3,
      subtotal: 150.0,
      iva: 24.0,
      total: 174.0,
    },
    {
      fecha: "15/08/2025",
      nTicket: "F001-026",
      codigoCliente: "C001",
      cte: "PÚBLICO GRAL",
      cantidad: 2,
      subtotal: 120.0,
      iva: 19.2,
      total: 139.2,
    },
    {
      fecha: "15/08/2025",
      nTicket: "F001-027",
      codigoCliente: "C002",
      cte: "EMPRESA XYZ",
      cantidad: 5,
      subtotal: 250.0,
      iva: 40.0,
      total: 290.0,
    },
    {
      fecha: "15/08/2025",
      nTicket: "F001-028",
      codigoCliente: "C001",
      cte: "PÚBLICO GRAL",
      cantidad: 1,
      subtotal: 50.0,
      iva: 8.0,
      total: 58.0,
    },
    {
      fecha: "15/08/2025",
      nTicket: "F001-029",
      codigoCliente: "C003",
      cte: "CLIENTE VIP",
      cantidad: 4,
      subtotal: 200.0,
      iva: 32.0,
      total: 232.0,
    },
  ]

  return (
    <>
      
      <div className="mb-6 rounded-lg overflow-hidden border border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-[#395886] text-white">
            <tr>
              <th className="p-3 text-center font-medium">Fecha</th>
              <th className="p-3 text-center font-medium">N. Ticket</th>
              <th className="p-3 text-center font-medium">Código de cliente</th>
              <th className="p-3 text-center font-medium">CTE</th>
              <th className="p-3 text-center font-medium">Cantidad</th>
              <th className="p-3 text-center font-medium">Subtotal</th>
              <th className="p-3 text-center font-medium">Iva</th>
              <th className="p-3 text-center font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-500">
                  No hay datos para mostrar.
                </td>
              </tr>
            ) : (
              ticketsData.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-3 text-center">{item.fecha}</td>
                  <td className="p-3 text-center">{item.nTicket}</td>
                  <td className="p-3 text-center">{item.codigoCliente}</td>
                  <td className="p-3 text-center">{item.cte}</td>
                  <td className="p-3 text-center">{item.cantidad}</td>
                  <td className="p-3 text-center">${item.subtotal.toFixed(2)}</td>
                  <td className="p-3 text-center">${item.iva.toFixed(2)}</td>
                  <td className="p-3 text-center">${item.total.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      
      <div className="flex justify-between items-end">
        <ExportarPDFExcel data={ticketsData} fileName="reporte-ventas-ticket" />
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Cancelar
        </button>
      </div>
    </>
  )
}

export default ReporteVentasTicket
