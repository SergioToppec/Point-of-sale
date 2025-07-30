import { useState } from "react"
import { FaTimes, FaFilter } from "react-icons/fa"
import ExportarPDFExcel from "../../components/exportar-pdf-excel"

const CostoTotalInventarioModal = ({ isOpen, onClose, totalAmount }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[400px] mx-4 p-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            El costo total del inventario mostrado es: <br />
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

const ReporteInventarioModal = ({ isOpen, onClose }) => {
  const [showCostoTotalInventario, setShowCostoTotalInventario] = useState(false)
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)
  const [filter, setFilter] = useState("Todos")

  const inventory = [
    { clave: "5012345678900", descripcion: "Coca cola desechable 600 ml", cantidad: 35, precio: 19.5 },
    { clave: "5012345678901", descripcion: "Pepsi lata 355 ml", cantidad: 50, precio: 15.0 },
    { clave: "5012345678902", descripcion: "Agua Bonafont 1L", cantidad: 20, precio: 12.0 },
    { clave: "5012345678903", descripcion: "Jugo del Valle 1L", cantidad: 15, precio: 22.0 },
    { clave: "5012345678904", descripcion: "Sabritas 40g", cantidad: 60, precio: 10.0 },
    { clave: "5012345678905", descripcion: "Galletas Oreo 133g", cantidad: 40, precio: 18.0 },
    { clave: "5012345678906", descripcion: "Chips Ahoy 100g", cantidad: 25, precio: 20.0 },
    { clave: "5012345678907", descripcion: "Sprite lata 355 ml", cantidad: 45, precio: 14.0 },
    { clave: "5012345678908", descripcion: "Powerade 500 ml", cantidad: 30, precio: 17.5 },
    { clave: "5012345678909", descripcion: "Red Bull 250 ml", cantidad: 10, precio: 30.0 },
  ]

  const filteredInventory = [...inventory]
  if (filter === "Cantidad mas alta") {
    filteredInventory.sort((a, b) => b.cantidad - a.cantidad)
  } else if (filter === "Cantidad mas baja") {
    filteredInventory.sort((a, b) => a.cantidad - b.cantidad)
  }

  const totalInventoryCost = filteredInventory.reduce(
    (sum, item) => sum + item.cantidad * item.precio,
    0
  )

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setIsFilterDropdownOpen(false)
  }

  const filterOptions = [
    { label: "Todos", value: "Todos" },
    { label: "Cantidad más alta", value: "Cantidad mas alta" },
    { label: "Cantidad más baja", value: "Cantidad mas baja" },
  ]

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg shadow-xl w-[900px] max-w-5xl mx-4">
          <div className="bg-[#395886] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Generar reporte</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowCostoTotalInventario(true)}
                className="bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Costo total del inventario
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="flex items-center gap-2 text-sm bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaFilter />
                  Filtrar
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#D5DEEF] rounded-lg shadow-lg z-50 overflow-visible">
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

            {/* Tabla con encabezado fijo y scroll */}
            <div className="mb-6 rounded-lg border border-gray-300 max-h-[300px] overflow-y-auto hide-scrollbar z-0 relative">
              <table className="w-full text-sm">
                <thead className="bg-[#395886] text-white sticky top-0 z-10">
                  <tr>
                    <th className="p-3 text-center font-medium bg-[#395886]">Clave de producto</th>
                    <th className="p-3 text-center font-medium bg-[#395886]">Descripción</th>
                    <th className="p-3 text-center font-medium bg-[#395886]">Cantidad</th>
                    <th className="p-3 text-center font-medium bg-[#395886]">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInventory.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-gray-500">
                        No hay productos para mostrar con el filtro actual.
                      </td>
                    </tr>
                  ) : (
                    filteredInventory.map((item, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-3 text-center">{item.clave}</td>
                        <td className="p-3 text-center">{item.descripcion}</td>
                        <td className="p-3 text-center">{item.cantidad}</td>
                        <td className="p-3 text-center">${item.precio.toFixed(2)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-end">
              <ExportarPDFExcel data={filteredInventory} fileName="reporte-inventario" />
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

      <CostoTotalInventarioModal
        isOpen={showCostoTotalInventario}
        onClose={() => setShowCostoTotalInventario(false)}
        totalAmount={totalInventoryCost}
      />
    </>
  )
}

export default ReporteInventarioModal
