import { FaShoppingCart } from "react-icons/fa";
import { FaBoxOpen, FaGear } from "react-icons/fa6";

const options = [
  {
    key: "general",
    label: "Configuración",
    icon: <FaGear  size={18} className="ml-2 mr-2"/>,
  },
  {
    key: "ventas",
    label: "Ventas",
    icon: <FaShoppingCart size={18} className="ml-2 mr-2"/>,
  },
  {
    key: "inventario",
    label: "Inventario",
    icon: <FaBoxOpen size={18} className="ml-2 mr-2"/>,
  },
];

export default function SidebarGeneral({ selected, onSelect }) {
  return (
    <nav className="flex flex-col h-full border-r-[1px]">
      {options.map((opt) => (
        <ul className="flex flex-col items-center w-44 mt-3">
          <li className="flex items-center">
            <button
              key={opt.key}
              className={`flex items-center text-left w-40 h-10 font-medium hover:bg-azulClaro hover:font-semibold rounded-[13px] transition-colors  ${
                selected === opt.key
                  ? "bg-azulClaro font-semibold text-azulOscuro"
                  : "text-azulOscuro"
              }`}
              onClick={() => onSelect(opt.key)}
            >
              {opt.icon}
              {opt.label}
            </button>
          </li>
        </ul>
      ))}
    </nav>
  );
}
