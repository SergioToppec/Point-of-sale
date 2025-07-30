import { useState } from "react"
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaCreditCard
} from "react-icons/fa"

import ReportePagosModal from "./modules/reporte-pagos-modal"
import RegistroClientesModal from "./modules/registro-clientes-modal"
import ReporteInventarioModal from "./modules/reporte-inventario-modal" // Modal de inventario

export default function Reports() {
  const [showReportePagos, setShowReportePagos] = useState(false)
  const [showClientes, setShowClientes] = useState(false)
  const [showInventario, setShowInventario] = useState(false)

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex flex-wrap gap-6 items-start">
        <button
          onClick={() => setShowInventario(true)}
          className="bg-azulOscuro hover:bg-azulOscuro/90 text-white w-[180px] h-[110px] rounded-lg flex flex-col items-center justify-center gap-2 transition-colors duration-200"
        >
          <FaBoxOpen size={24} />
          <span className="text-sm font-medium text-center">Reporte de inventario</span>
        </button>

        <button
          onClick={() => setShowClientes(true)}
          className="bg-azulOscuro hover:bg-azulOscuro/90 text-white w-[180px] h-[110px] rounded-lg flex flex-col items-center justify-center gap-2 transition-colors duration-200"
        >
          <FaUsers size={24} />
          <span className="text-sm font-medium text-center">Reporte de clientes</span>
        </button>

        <button
          className="bg-azulOscuro hover:bg-azulOscuro/90 text-white w-[180px] h-[110px] rounded-lg flex flex-col items-center justify-center gap-2 transition-colors duration-200"
        >
          <FaShoppingCart size={24} />
          <span className="text-sm font-medium text-center">Reporte de ventas</span>
        </button>

        <button
          onClick={() => setShowReportePagos(true)}
          className="bg-azulOscuro hover:bg-azulOscuro/90 text-white w-[180px] h-[110px] rounded-lg flex flex-col items-center justify-center gap-2 transition-colors duration-200"
        >
          <FaCreditCard size={24} />
          <span className="text-sm font-medium text-center">Reporte de pago</span>
        </button>
      </div>

      {/* Modales todos aun falta uno*/}
      <ReportePagosModal isOpen={showReportePagos} onClose={() => setShowReportePagos(false)} />
      <RegistroClientesModal isOpen={showClientes} onClose={() => setShowClientes(false)} />
      <ReporteInventarioModal isOpen={showInventario} onClose={() => setShowInventario(false)} />
    </div>
  )
}
