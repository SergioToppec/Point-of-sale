import { useEffect, useState } from "react"
import { FaPlus, FaEdit, FaBoxOpen, FaSearch } from "react-icons/fa"
import InventoryForm from "../../ui/products/modules/IventoryForm"
import AddQuantityModal from "../../ui/products/modules/AddQuantityModal"
import EditProductModal from "../../ui/products/modules/EditProductModal"
import SuccessModal from "../../ui/products/components/SuccessModal"

const Inventory = () => {
  const [productos, setProductos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [showQuantityModal, setShowQuantityModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [successModal, setSuccessModal] = useState({ isOpen: false, message: "" })

  useEffect(() => {
    const productosGuardados = localStorage.getItem("productos")
    if (productosGuardados) {
      setProductos(JSON.parse(productosGuardados))
    }
  }, [])

  const mostrarMensaje = (msg) => {
    setSuccessModal({ isOpen: true, message: msg })
  }

  const guardarEnLocalStorage = (productosActualizados) => {
    localStorage.setItem("productos", JSON.stringify(productosActualizados))
  }

  const agregarAlHistorial = (producto) => {
    const historialAnterior = JSON.parse(localStorage.getItem("historial")) || []
    const hoy = new Date().toLocaleDateString("es-MX")
    const nuevoHistorial = [...historialAnterior, { ...producto, fecha: hoy }]
    localStorage.setItem("historial", JSON.stringify(nuevoHistorial))
  }

  const handleAgregarProducto = (nuevoProducto) => {
    const nuevosProductos = [...productos, nuevoProducto]
    setProductos(nuevosProductos)
    guardarEnLocalStorage(nuevosProductos)
    agregarAlHistorial(nuevoProducto)
    setShowForm(false)
    mostrarMensaje("Producto agregado correctamente")
  }

  const handleAgregarCantidad = (cantidad) => {
    if (productoSeleccionado) {
      const nuevosProductos = productos.map((p) =>
        p.clave === productoSeleccionado.clave ? { ...p, cantidad: p.cantidad + cantidad } : p
      )
      setProductos(nuevosProductos)
      guardarEnLocalStorage(nuevosProductos)
      setShowQuantityModal(false)
      mostrarMensaje("Cantidad agregada correctamente")
    }
  }

  const handleEditarProducto = (productoEditado) => {
    const nuevosProductos = productos.map((p) => (p.clave === productoEditado.clave ? productoEditado : p))
    setProductos(nuevosProductos)
    guardarEnLocalStorage(nuevosProductos)
    setShowEditModal(false)
    mostrarMensaje("Producto editado correctamente")
  }

  const handleEditClick = (producto, e) => {
    e.stopPropagation()
    setProductoSeleccionado(producto)
    setShowEditModal(true)
  }

  const productosFiltrados = productos.filter((prod) =>
    prod.clave.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prod.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prod.cantidad.toString().includes(searchTerm) ||
    prod.precio.toString().includes(searchTerm)
  )

  return (
    <div className="p-8 bg-white min-h-screen overflow-hidden font-sans">
      <SuccessModal
        isOpen={successModal.isOpen}
        message={successModal.message}
        onClose={() => setSuccessModal({ isOpen: false, message: "" })}
      />

      <div className="flex gap-6">
        <div className="flex-1">
          {/* Buscador sacado del ticket reutilizad*/}
          <div className="relative mb-4 w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por: Clave de producto, descripción, cantidad o precio"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-azulOscuro focus:border-transparent"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Botón agregar producto */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-azulOscuro hover:bg-azulFuerte text-white font-medium px-3 py-1.5 rounded-[10px] text-xs"
            >
              <FaPlus className="w-3 h-3" />
              Nuevo producto
            </button>
          </div>

          {/* Tabla */}
          <div className="border border-gray-300 overflow-hidden rounded-[10px]">
            <div className="max-h-[250px] overflow-y-auto hide-scrollbar">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-azulOscuro text-white sticky top-0 z-10 font-sans">
                  <tr>
                    <th className="py-3 px-4 text-center font-medium">Clave producto</th>
                    <th className="py-3 px-4 text-center font-medium">Descripción</th>
                    <th className="py-3 px-4 text-center font-medium">Cantidad</th>
                    <th className="py-3 px-4 text-center font-medium">Precio</th>
                    <th className="py-3 px-4 text-center font-medium">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {productosFiltrados.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-500">
                        No hay productos en el inventario
                      </td>
                    </tr>
                  ) : (
                    productosFiltrados.map((prod, index) => (
                      <tr
                        key={index}
                        className={`text-center border-t border-gray-200 cursor-pointer ${
                          productoSeleccionado?.clave === prod.clave ? "bg-azulClaro" : ""
                        }`}
                        onClick={() => setProductoSeleccionado(prod)}
                      >
                        <td className="py-2 px-4">{prod.clave}</td>
                        <td className="py-2 px-4">{prod.descripcion}</td>
                        <td className="py-2 px-4">{prod.cantidad}</td>
                        <td className="py-2 px-4">${prod.precio.toFixed(2)}</td>
                        <td className="py-2 px-4">
                          <button
                            onClick={(e) => handleEditClick(prod, e)}
                            className="text-azulOscuro hover:text-azulFuerte transition-colors p-1"
                            title="Editar producto"
                          >
                            <FaEdit className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div className="w-48 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium text-sm text-right">Cantidad actual:</label>
            <input
              type="text"
              readOnly
              value={productos.reduce((sum, p) => sum + p.cantidad, 0)}
              className="text-center border border-gray-300 rounded-[10px] bg-azulClaro font-medium text-lg py-2 h-10"
            />
          </div>
          <button
            onClick={() => {
              if (productoSeleccionado) {
                setShowQuantityModal(true)
              }
            }}
            className="flex items-center gap-2 justify-center bg-azulOscuro hover:bg-azulFuerte text-white font-medium px-3 py-1.5 rounded-[10px] text-xs"
          >
            <FaBoxOpen className="w-3 h-3" />
            Agregar cantidad
          </button>
        </div>
      </div>

      {showForm && (
        <InventoryForm
          onClose={() => setShowForm(false)}
          onAdd={handleAgregarProducto}
          productosExistentes={productos}
        />
      )}
      {showQuantityModal && productoSeleccionado && (
        <AddQuantityModal
          producto={productoSeleccionado}
          onClose={() => setShowQuantityModal(false)}
          onAdd={handleAgregarCantidad}
        />
      )}
      {showEditModal && productoSeleccionado && (
        <EditProductModal
          producto={productoSeleccionado}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleEditarProducto}
        />
      )}
    </div>
  )
}

export default Inventory
