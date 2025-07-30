import { useState } from "react"
import { FaTimes, FaFilter, FaCheck } from "react-icons/fa"
import ExportarPDFExcel from "../../components/exportar-pdf-excel"

const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[400px] mx-4 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-6">{message}</h3>
          <button
            onClick={onClose}
            className="bg-[#395886] hover:bg-[#314d71] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

const TotalDelDiaModal = ({ isOpen, onClose, totalAmount }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[400px] mx-4 p-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            El costo total del día es: <br />
            <span className="text-[#395886]">${totalAmount.toFixed(2)}</span>
          </h3>
          <button
            onClick={onClose}
            className="bg-[#395886] hover:bg-[#314d71] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

const ReportePagosModal = ({ isOpen, onClose }) => {
  const [showTotalDelDia, setShowTotalDelDia] = useState(false)
  const [filter, setFilter] = useState("Todos")
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)

  const payments = [
    { id: 1, cliente: "Josue Abraham", cantidad: 400.5, metodo: "Efectivo" },
    { id: 2, cliente: "Sergio Toppec", cantidad: 500.0, metodo: "Tarjeta" },
    { id: 3, cliente: "Arturo Ortiz", cantidad: 200.9, metodo: "Vales" },
    { id: 4, cliente: "Lucía Pérez", cantidad: 150.25, metodo: "Efectivo" },
    { id: 5, cliente: "Marta Castillo", cantidad: 620.0, metodo: "Tarjeta" },
    { id: 6, cliente: "Raúl Suárez", cantidad: 80.75, metodo: "Vales" },
    { id: 7, cliente: "Ana Martínez", cantidad: 330.0, metodo: "Efectivo" },
  ]

  let filteredPayments = [...payments]
  if (filter === "Solo efectivo") {
    filteredPayments = payments.filter((p) => p.metodo === "Efectivo")
  } else if (filter === "Solo tarjeta") {
    filteredPayments = payments.filter((p) => p.metodo === "Tarjeta")
  } else if (filter === "Solo vales") {
    filteredPayments = payments.filter((p) => p.metodo === "Vales")
  } else if (filter === "Cantidad mas alta") {
    filteredPayments.sort((a, b) => b.cantidad - a.cantidad)
  } else if (filter === "Cantidad mas baja") {
    filteredPayments.sort((a, b) => a.cantidad - b.cantidad)
  }

  const totalAmount = payments.reduce((sum, p) => sum + p.cantidad, 0)

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setIsFilterDropdownOpen(false)
  }

  const filterOptions = [
    { label: "Todos", value: "Todos" },
    { label: "Cantidad más alta", value: "Cantidad mas alta" },
    { label: "Cantidad más baja", value: "Cantidad mas baja" },
    { label: "Solo efectivo", value: "Solo efectivo" },
    { label: "Solo tarjeta", value: "Solo tarjeta" },
    { label: "Solo vales", value: "Solo vales" },
  ]

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg shadow-xl w-[800px] max-w-4xl mx-4">
          {/* Header */}
          <div className="bg-[#395886] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Resumen de pagos</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Top row con overflow-visible para el dropdown */}
            <div className="flex justify-between items-center mb-4 relative overflow-visible z-50">
              <button
                onClick={() => setShowTotalDelDia(true)}
                className="bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Total del día
              </button>

              <div className="relative z-50">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="flex items-center gap-2 text-sm bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaFilter />
                  Filtrar
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#D5DEEF] rounded-lg shadow-lg z-[1000] overflow-visible">
                    <ul className="py-1">
                      {filterOptions.map((option) => (
                        <li
                          key={option.value}
                          className={`px-4 py-2 text-base text-gray-800 cursor-pointer transition-colors ${
                            filter === option.value ? "bg-[#638ECB]/60" : "hover:bg-[#638ECB]/60"
                          }`}
                          onClick={() => handleFilterChange(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Tabla scrollable */}
            <div className="mb-6 overflow-hidden border border-gray-300 max-h-[250px] overflow-y-auto hide-scrollbar rounded-t-[10px]">
              <table className="w-full text-sm">
                <thead className="bg-[#395886] text-white sticky top-0 z-10 rounded-t-[10px]">
                  <tr>
                    <th className="p-3 text-left font-medium">Nombre del cliente</th>
                    <th className="p-3 text-left font-medium">Cantidad</th>
                    <th className="p-3 text-left font-medium">Método de pago</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-8 text-center text-gray-500">
                        No hay pagos para mostrar con el filtro actual.
                      </td>
                    </tr>
                  ) : (
                    filteredPayments.map((payment) => (
                      <tr key={payment.id} className="border-t border-gray-200 bg-white">
                        <td className="p-3">{payment.cliente}</td>
                        <td className="p-3">${payment.cantidad.toFixed(2)}</td>
                        <td className="p-3">{payment.metodo}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Exportar y cancelar */}
            <div className="flex justify-between items-end">
              <ExportarPDFExcel data={filteredPayments} fileName="reporte-pagos" />
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      <TotalDelDiaModal isOpen={showTotalDelDia} onClose={() => setShowTotalDelDia(false)} totalAmount={totalAmount} />
    </>
  )
}

export default ReportePagosModal
