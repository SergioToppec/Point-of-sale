"use client"

import { useState } from "react"
import {
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaCashRegister,
} from "react-icons/fa"
import CajaModal from "../permissions/modules/caja-modal"
import InventarioActual from "./components/inventario-actual"
import GlobalLoader from "../components/GlobalLoader"
import revotec from "@/assets/icons/revotec.svg"

const Permissions = () => {
  const [isCajaOpen, setIsCajaOpen] = useState(false)
  const [showInventarioActual, setShowInventarioActual] = useState(false)

  const [loader, setLoader] = useState({
    show: false,
    message: "",
    redirectTo: "",
  })

  const handleRedirect = (message, path) => {
    setLoader({
      show: true,
      message,
      redirectTo: path,
    })
  }

  const permissionButtons = [
    {
      id: "clientes",
      label: "Clientes",
      icon: FaUsers,
      onClick: () => handleRedirect("Redirigiendo a clientes...", "/dashboard/clients"),
    },
    {
      id: "producto",
      label: "Producto",
      icon: FaShoppingCart,
      onClick: () => handleRedirect("Redirigiendo a inventario", "/dashboard/products"),
    },
    {
      id: "inventario",
      label: "Inventario",
      icon: FaBoxOpen,
      onClick: () => setShowInventarioActual(true),
    },
    {
      id: "caja",
      label: "Caja",
      icon: FaCashRegister,
      onClick: () => setIsCajaOpen(true),
    },
  ]

  return (
    <div className="p-8 bg-white min-h-screen relative">
      <div className="flex justify-start gap-6">
        {permissionButtons.map((button) => {
          const IconComponent = button.icon
          return (
            <button
              key={button.id}
              onClick={button.onClick}
              className="bg-[#395886] hover:bg-[#314d71] text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center gap-3 min-w-[180px] min-h-[120px] transition-colors duration-200"
            >
              <IconComponent size={32} />
              <span className="text-lg font-medium">{button.label}</span>
            </button>
          )
        })}
      </div>

      {/* Loader Global primer ejemplo xd salio bien */}
      {loader.show && (
        <GlobalLoader
          message={loader.message}
          redirectTo={loader.redirectTo}
          logo={revotec}
        />
      )}

      {/* Modal de Caja ya me quiero ir  */}
      {isCajaOpen && <CajaModal isOpen={isCajaOpen} onClose={() => setIsCajaOpen(false)} />}

      {/*modal de inventario gg lolllll*/}
      {showInventarioActual && (
        <InventarioActual onClose={() => setShowInventarioActual(false)} />
      )}
    </div>
  )
}

export default Permissions
