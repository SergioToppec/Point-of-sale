import { useState } from "react"
import { FaTimes, FaChevronDown, FaFilter } from "react-icons/fa"
import ReporteVentas from "../components/reporte-ventas"
import ReporteVentasTicket from "../components/reporte-ventas-ticket"

// esta cosa de aqui maneja el cambio entre tipos de reporte
const ReporteVentasModal = ({ isOpen, onClose }) => {
  const [tipoReporte, setTipoReporte] = useState("venta")
  const [isReportTypeDropdownOpen, setIsReportTypeDropdownOpen] = useState(false)
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)
  const [filter, setFilter] = useState("Todos")

  const handleReportTypeChange = (tipo) => {
    setTipoReporte(tipo)
    setIsReportTypeDropdownOpen(false)
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setIsFilterDropdownOpen(false)
  }

  const reportTypeOptions = [
    { label: "Reporte de venta", value: "venta" },
    { label: "Reporte de ventas por ticket", value: "ticket" },
  ]

  const filterOptions = [
    { label: "Todos", value: "Todos" },
    { label: "Producto más vendido", value: "Producto más vendido" },
    { label: "Precio más alto", value: "Precio más alto" },
    { label: "Precio más bajo", value: "Precio más bajo" },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg shadow-xl w-[900px] max-w-5xl mx-4">
        
        <div className="bg-azulOscuro text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-bold">
            {tipoReporte === "venta" ? "Reporte de venta" : "Reporte de ventas por ticket"}
          </h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FaTimes />
          </button>
        </div>
        
        <div className="p-6">
          
          <div className="flex justify-between items-center mb-4">
            
            <div className="relative">
              <button
                onClick={() => setIsReportTypeDropdownOpen(!isReportTypeDropdownOpen)}
                className="flex items-center gap-2 text-sm bg-azulOscuro hover:bg-azulFuerte text-white px-4 py-2 rounded-lg transition-colors"
              >
                Tipo de reporte
                <FaChevronDown />
              </button>
              {isReportTypeDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-azulClaro rounded-lg shadow-lg z-10 overflow-hidden">
                  <ul className="py-1">
                    {reportTypeOptions.map((option) => (
                      <li
                        key={option.value}
                        className={`px-4 py-2 text-sm text-gray-800 cursor-pointer transition-colors ${
                          tipoReporte === option.value
                            ? "bg-azulFuerte/40"
                            : "hover:bg-azulFuerte/40"
                        }`}
                        onClick={() => handleReportTypeChange(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Filter button - only show for "venta" type */}
            {tipoReporte === "venta" && (
              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="flex items-center gap-2 text-sm bg-azulOscuro hover:bg-azulFuerte text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaFilter />
                  Filtrar
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-azulClaro rounded-lg shadow-lg z-10 overflow-hidden">
                    <ul className="py-1">
                      {filterOptions.map((option) => (
                        <li
                          key={option.value}
                          className={`px-4 py-2 text-sm text-gray-800 cursor-pointer transition-colors ${
                            filter === option.value
                              ? "bg-azulFuerte/40"
                              : "hover:bg-azulFuerte/40"
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
            )}
          </div>

          {/* Render the appropriate report component */}
          {tipoReporte === "venta" ? (
            <ReporteVentas onClose={onClose} showFilter={false} />
          ) : (
            <ReporteVentasTicket onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ReporteVentasModal
