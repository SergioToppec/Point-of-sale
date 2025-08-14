import { useEffect, useState } from "react"
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
            <span className="text-azulOscuro">${totalAmount.toFixed(2)}</span>
          </h3>
          <button
            onClick={onClose}
            className="bg-azulOscuro hover:bg-[#314d71] text-white px-6 py-2 rounded-lg font-medium transition-colors"
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
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const productosGuardados = localStorage.getItem("productos")
    if (productosGuardados) {
      setProductos(JSON.parse(productosGuardados))
    }
  }, [])

  const filteredInventory = [...productos]
  if (filter === "Cantidad mas alta") {
    filteredInventory.sort((a, b) => b.cantidad - a.cantidad)
  } else if (filter === "Cantidad mas baja") {
    filteredInventory.sort((a, b) => a.cantidad - b.cantidad)
  }

  const totalInventoryCost = filteredInventory.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
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
          <div className="bg-azulOscuro text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Generar reporte</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowCostoTotalInventario(true)}
                className="bg-azulOscuro hover:bg-[#314d71] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Costo total del inventario
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="flex items-center gap-2 text-sm bg-azulOscuro hover:bg-[#314d71] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaFilter />
                  Filtrar
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-azulClaro rounded-lg shadow-lg z-50 overflow-visible">
                    <ul className="py-1">
                      {filterOptions.map((option) => (
                        <li
                          key={option.value}
                          className={`px-4 py-2 text-base text-gray-800 cursor-pointer transition-colors ${
                            filter === option.value ? "bg-azulFuerte/60" : "hover:bg-azulFuerte/60"
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

            <div className="mb-6 rounded-lg border border-gray-300 max-h-[300px] overflow-y-auto hide-scrollbar z-0 relative">
              <table className="w-full text-sm">
                <thead className="bg-azulOscuro text-white sticky top-0 z-10">
                  <tr>
                    <th className="p-3 text-center font-medium bg-azulOscuro">Clave de producto</th>
                    <th className="p-3 text-center font-medium bg-azulOscuro">Descripción</th>
                    <th className="p-3 text-center font-medium bg-azulOscuro">Cantidad</th>
                    <th className="p-3 text-center font-medium bg-azulOscuro">Precio</th>
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
                className="bg-rojoFuerte hover:bg-[#92110f] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
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
