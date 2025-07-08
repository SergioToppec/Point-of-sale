
import { FaUsers, FaShoppingCart, FaBoxOpen, FaCashRegister } from "react-icons/fa"

export default function Permissions() {
  const permissionButtons = [
    {
      id: "clientes",
      label: "Clientes",
      icon: FaUsers,
      onClick: () => console.log("Clientes clicked"),
    },
    {
      id: "producto",
      label: "Producto",
      icon: FaShoppingCart,
      onClick: () => console.log("Producto clicked"),
    },
    {
      id: "inventario",
      label: "Inventario",
      icon: FaBoxOpen,
      onClick: () => console.log("Inventario clicked"),
    },
    {
      id: "caja",
      label: "Caja",
      icon: FaCashRegister,
      onClick: () => console.log("Caja clicked"),
    },
  ]

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-start gap-6">
        {permissionButtons.map((button) => {
          const IconComponent = button.icon
          return (
            <button
              key={button.id}
              onClick={button.onClick}
              className="bg-[#395886] hover:bg-[#314d71] text-white rounded-lg px-8 py-6 flex flex-col items-center justify-center gap-3 min-w-[180px] min-h-[120px] transition-colors duration-200"
            >
              <IconComponent size={32} className="text-white" />
              <span className="text-lg font-medium">{button.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
