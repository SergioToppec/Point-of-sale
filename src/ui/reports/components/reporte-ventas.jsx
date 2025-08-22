import { useState } from "react"
import { FaFilter } from "react-icons/fa"
import ExportarPDFExcel from "../../components/exportar-pdf-excel"

const ReporteVentas = ({ onClose, showFilter = true, filter = "Todos" }) => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)
  const [currentFilter, setCurrentFilter] = useState(filter)

  // Datos de ejemplo para reporte de venta xd todo estetico
  const ventasData = [
    {
      clave: "5012345678900",
      descripcion: "Coca cola desechable 600 ml",
      cantidadVendida: 30,
      precio: 19.5,
      cajero: "Josue Abraham",
    },
    {
      clave: "789123456789",
      descripcion: "Agua mineral sin gas 500 ml",
      cantidadVendida: 40,
      precio: 12.5,
      cajero: "Josue Abraham",
    },
    {
      clave: "123456789123",
      descripcion: "Galletas de chocolate 150 g",
      cantidadVendida: 25,
      precio: 22.0,
      cajero: "Josue Abraham",
    },
    {
      clave: "456789123456",
      descripcion: "Jugo de naranja 1 L",
      cantidadVendida: 15,
      precio: 28.5,
      cajero: "Josue Abraham",
    },
    {
      clave: "987654321987",
      descripcion: "Papas fritas saladas 200 g",
      cantidadVendida: 50,
      precio: 35.0,
      cajero: "Josue Abraham",
    },
  ]

  const filteredData = [...ventasData]

  // Filtros para reporte de venta
  if (currentFilter === "Producto más vendido") {
    filteredData.sort((a, b) => b.cantidadVendida - a.cantidadVendida)
  } else if (currentFilter === "Precio más alto") {
    filteredData.sort((a, b) => b.precio - a.precio)
  } else if (currentFilter === "Precio más bajo") {
    filteredData.sort((a, b) => a.precio - b.precio)
  }

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter)
    setIsFilterDropdownOpen(false)
  }

  const filterOptions = [
    { label: "Todos", value: "Todos" },
    { label: "Producto más vendido", value: "Producto más vendido" },
    { label: "Precio más alto", value: "Precio más alto" },
    { label: "Precio más bajo", value: "Precio más bajo" },
  ]

  return (
    <>
      {showFilter && (
        <div className="flex justify-end items-center mb-4">
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
                        currentFilter === option.value
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
        </div>
      )}

      <div className="mb-6 rounded-lg overflow-hidden border border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-azulOscuro text-white">
            <tr>
              <th className="p-3 text-center font-medium">Clave de Producto</th>
              <th className="p-3 text-center font-medium">Descripción</th>
              <th className="p-3 text-center font-medium">Cantidad vendida</th>
              <th className="p-3 text-center font-medium">Precio</th>
              <th className="p-3 text-center font-medium">Cajero asociado a la venta</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  No hay datos para mostrar.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="p-3 text-center">{item.clave}</td>
                  <td className="p-3 text-center">{item.descripcion}</td>
                  <td className="p-3 text-center">{item.cantidadVendida}</td>
                  <td className="p-3 text-center">${item.precio.toFixed(2)}</td>
                  <td className="p-3 text-center">{item.cajero}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-end">
        <ExportarPDFExcel data={filteredData} fileName="reporte-ventas" />
        <button
          onClick={onClose}
          className="bg-rojoFuerte hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Cancelar
        </button>
      </div>
    </>
  )
}

export default ReporteVentas
