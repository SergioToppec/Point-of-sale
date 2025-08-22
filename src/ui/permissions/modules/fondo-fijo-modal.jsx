import { useState } from "react"
import { FaTimes, FaCheck } from "react-icons/fa"

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans">
      <div className="bg-white rounded-lg shadow-xl w-[500px] mx-4 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Guardado con éxito</h3>
          <button
            onClick={onClose}
            className="bg-azulOscuro hover:bg-azulFuerte text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

const FondoFijoModal = ({ isOpen, onClose }) => {
  const [monto, setMonto] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSave = () => {
    if (!monto || parseFloat(monto) <= 0) {
      setError("Debes ingresar un monto válido para guardar.")
      return
    }

    setError("")
    setShowSuccess(true)
    setMonto("")
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans">
        <div className="bg-white rounded-lg shadow-xl w-[400px] mx-4">
          {/* Header */}
          <div className="bg-azulOscuro text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Fondo fijo</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>

          <div className="p-6">
            {/* Campos de formulario */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monto</label>
                <input
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-azulOscuro focus:border-transparent"
                />
                {error && (
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                <input
                  type="text"
                  value="Efectivo"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                />
              </div>
            </div>

            {/* Botón de guardar */}
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="bg-azulOscuro hover:bg-azulFuerte text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de éxito jajja aqui probe algo nuevo */}
      <SuccessModal isOpen={showSuccess} onClose={handleSuccessClose} />
    </>
  )
}

export default FondoFijoModal
