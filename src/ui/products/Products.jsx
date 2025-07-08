"use client"

import { useState } from "react"
import { FaPlus, FaEdit, FaBoxOpen } from "react-icons/fa"
import InventoryForm from "../../ui/products/modules/IventoryForm"
import AddQuantityModal from "../../ui/products/modules/AddQuantityModal"
import EditProductModal from "../../ui/products/modules/EditProductModal"
import SuccessModal from "../../ui/products/components/SuccessModal"

const Inventory = () => {
  const [productos, setProductos] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showQuantityModal, setShowQuantityModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [successModal, setSuccessModal] = useState({ isOpen: false, message: "" })

  const mostrarMensaje = (msg) => {
    setSuccessModal({ isOpen: true, message: msg })
  }

  const handleAgregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto])
    setShowForm(false)
    mostrarMensaje("Producto agregado correctamente")
  }

  const handleAgregarCantidad = (cantidad) => {
    if (productoSeleccionado) {
      const nuevosProductos = productos.map((p) =>
        p.clave === productoSeleccionado.clave ? { ...p, cantidad: p.cantidad + cantidad } : p
      )
      setProductos(nuevosProductos)
      setShowQuantityModal(false)
      mostrarMensaje("Cantidad agregada correctamente")
    }
  }

  const handleEditarProducto = (productoEditado) => {
    const nuevosProductos = productos.map((p) =>
      p.clave === productoEditado.clave ? productoEditado : p
    )
    setProductos(nuevosProductos)
    setShowEditModal(false)
    mostrarMensaje("Producto editado correctamente")
  }

  return (
    <div className="p-8 bg-white min-h-screen">


      {/* Success Modal */}
      <SuccessModal
        isOpen={successModal.isOpen}
        message={successModal.message}
        onClose={() => setSuccessModal({ isOpen: false, message: "" })}
      />

      {/* Contenedor tabla + botones encima */}
      <div className="flex gap-6">
        {/* Columna principal con botones y tabla */}
        <div className="flex-1">
          {/* Botones en la misma fila sobre la tabla */}
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-[#395886] hover:bg-[#314d71] text-white font-medium px-3 py-1.5 rounded-[10px] text-xs"
            >
              <FaPlus className="w-3 h-3" />
              Nuevo producto
            </button>
            <button
              onClick={() => {
                if (productoSeleccionado) {
                  setShowEditModal(true)
                }
              }}
              className="flex items-center gap-2 bg-[#395886] hover:bg-[#314d71] text-white font-medium px-3 py-1.5 rounded-[10px] text-xs"
            >
              <FaEdit className="w-3 h-3" />
              Modificar producto
            </button>
          </div>

          {/* Tabla */}
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-[#395886] text-white">
              <tr>
                <th className="p-3 text-center font-medium">Clave producto</th>
                <th className="p-3 text-center font-medium">Descripción</th>
                <th className="p-3 text-center font-medium">Cantidad</th>
                <th className="p-3 text-center font-medium">Precio</th>
              </tr>
            </thead>
            <tbody>
              {productos.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No hay productos en el inventario
                  </td>
                </tr>
              ) : (
                productos.map((prod, index) => (
                  <tr
                    key={index}
                    className={`text-center border-t border-gray-200 cursor-pointer ${
                      productoSeleccionado?.clave === prod.clave ? "bg-[#D5DEEF]" : ""
                    }`}
                    onClick={() => setProductoSeleccionado(prod)}
                  >
                    <td className="p-2">{prod.clave}</td>
                    <td className="p-2">{prod.descripcion}</td>
                    <td className="p-2">{prod.cantidad}</td>
                    <td className="p-2">${prod.precio.toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Sidebar derecho */}
        <div className="w-48 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium text-sm text-right">Cantidad actual:</label>
            <input
              type="text"
              readOnly
              value={productos.reduce((sum, p) => sum + p.cantidad, 0)}
              className="text-center border border-gray-300 rounded-[10px] bg-[#D5DEEF] font-medium text-lg py-2 h-10"
            />
          </div>
          <button
            onClick={() => {
              if (productoSeleccionado) {
                setShowQuantityModal(true)
              }
            }}
            className="flex items-center gap-2 justify-center bg-[#395886] hover:bg-[#314d71] text-white font-medium px-3 py-1.5 rounded-[10px] text-xs"
          >
            <FaBoxOpen className="w-3 h-3" />
            Agregar cantidad
          </button>
        </div>
      </div>

      {/* Formularios modales */}
      {showForm && <InventoryForm onClose={() => setShowForm(false)} onAdd={handleAgregarProducto} />}
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
