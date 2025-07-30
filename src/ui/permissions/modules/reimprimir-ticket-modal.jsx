"use client"

import { useState } from "react"
import { FaTimes, FaSearch, FaCheck } from "react-icons/fa"

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[460px] mx-4 p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            El ticket se ha imprimido
            <br />
            correctamente
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

const ReimprimirTicketModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showError, setShowError] = useState(false)

  const tickets = [
    { id: 1, numero: "Ticket #001", fecha: "(10:30AM 19/06/2025)" },
    { id: 2, numero: "Ticket #002", fecha: "(11:15AM 19/06/2025)" },
  ]

  const handleReimprimir = () => {
    if (!selectedTicket) {
      setShowError(true)
      return
    }
    setShowSuccess(true)
    setShowError(false)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    onClose()
  }

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket)
    setShowError(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-[600px] mx-4">
          {/* Header */}
          <div className="bg-[#395886] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Reimprimir Ticket</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <FaTimes />
            </button>
          </div>

         
          <div className="p-6">
            {/* barra de buscador ya luego lo modifico xd*/}
            <div className="relative mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por: N° de Ticket o Fecha"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#395886] focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Table */}
            <div className="mb-6">
              <table className="w-full border border-gray-300">
                <thead className="bg-[#395886] text-white">
                  <tr>
                    <th className="p-3 text-left font-medium">Numero de ticket</th>
                    <th className="p-3 text-left font-medium">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets
                    .filter(
                      (ticket) =>
                        ticket.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        ticket.fecha.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((ticket) => (
                      <tr
                        key={ticket.id}
                        onClick={() => handleTicketClick(ticket)}
                        className={`cursor-pointer border-t border-gray-200 transition-all ${
                          selectedTicket?.id === ticket.id
                            ? "bg-[#D6E4F6] border-l-4 border-[#395886]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <td className="p-3">• {ticket.numero}</td>
                        <td className="p-3">{ticket.fecha}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* mensaje de eror muy xd */}
            {showError && (
              <p className="text-red-500 text-sm text-center mb-4">
                Debes seleccionar un ticket para reimprimir.
              </p>
            )}

            {/* Reimprimir boton al principio dio erroes pero gg me la pelo */}
            <div className="flex justify-center">
              <button
                onClick={handleReimprimir}
                className={`px-8 py-2 rounded-lg font-medium transition-colors ${
                  selectedTicket
                    ? "bg-[#395886] hover:bg-[#314d71] text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                Reimprimir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal .l. */}
      <SuccessModal isOpen={showSuccess} onClose={handleSuccessClose} />
    </>
  )
}

export default ReimprimirTicketModal
