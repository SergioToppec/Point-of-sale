import ABCLogo from "@/assets/icons/ABC logo.svg";
import { useState } from "react";
import {
  FaArrowRightFromBracket,
  FaHouse,
  FaCartShopping,
  FaBoxOpen,
  FaUserGroup,
  FaFileLines,
  FaGear,
} from "react-icons/fa6";

import { MdPayments, MdLockOutline } from "react-icons/md";
import { BsLayoutSidebar } from "react-icons/bs";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [Open, setOpen] = useState(true);

  //El ! es un operador lógico que pone en negativo el valor del estado
  const ToggleSidebar = () => {
    setOpen(!Open);
  };

  const navigate = useNavigate()

  return (
    <nav
      name="viewport"
      className={`flex flex-col items-center justify-between min-h-full w-64 bg-white border-r-[1px] shadow-md p-4 transition-all duration-500 ${
        Open ? "w-60 " : "w-[96px]"
      }`}
    >
      <div>
        <div
          className={`flex items-center justify-center p-2 -mt-8 mr-2 ${
            Open ? "mr-2 translate-x-0" : " -translate-x-1  mr-7"
          }`}
        >
          <img
            src={ABCLogo}
            className={`w-52 h-28 transition-all duration-200 ${
              Open ? "opacity-100 translate-x-0" : " opacity-0 -translate-x-0"
            }`}
          />
          <button
            onClick={ToggleSidebar}
            className={`p-2 mt-3 hover:bg-azulClaro  rounded-lg transition-all duration-0 ${
              Open ? "mr-0 translate-x-1" : " -translate-x-1mr-0"
            }`}
          >
            <BsLayoutSidebar
              size={20}
              className={`text-azulOscuro  hover:text-blue-950`}
            />
          </button>
        </div>

        <ul
          className={`text-azulOscuro text-lg font-medium space-y-2 ${
            Open ? "w-48 ml-4 translate-x-1" : "w-14 ml-4 -translate-x-1"
          }`}
        >
          <li onClick={() => navigate("/dashboard")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <FaHouse
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Inicio
            </button>
          </li>
          <li onClick={() => navigate("pos")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <FaCartShopping
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Ventas
            </button>
          </li>
          <li onClick={() => navigate("products")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <FaBoxOpen
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Inventario
            </button>
          </li>
          <li onClick={() => navigate("clients")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <FaUserGroup
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Clientes
            </button>
          </li>

          <li onClick={() => navigate("invoices")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro ">
            <button>
              <FaFileLines
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Facturación
            </button>
          </li>

          <li onClick={() => navigate("payments")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <MdPayments
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Pago
            </button>
          </li>
          <li onClick={() => navigate("reports")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <HiMiniPresentationChartBar
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-300 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Reportes
            </button>
          </li>
          <li onClick={() => navigate("settings")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <FaGear
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <button
              className={`transition-all duration-100 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Configuración
            </button>
          </li>
          <li onClick={() => navigate("permissions")} className="flex items-center h-10 hover:font-semibold hover:rounded-[13px] hover:bg-azulClaro">
            <button>
              <MdLockOutline
                size={20}
                className={`ml-2 mr-2 transition-all duration-200 ${
                  Open ? "ml-2" : "ml-[17.5px]"
                }`}
              />
            </button>
            <span
              className={`leading-4 transition-all duration-200 ${
                Open
                  ? "opacity-100 translate-x-1"
                  : "opacity-0 -translate-x-1 pointer-events-none"
              }`}
            >
              Permisos o accesos
            </span>
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col items-center w-48 border-b-[2px] border-azulOscuro p-4 transition-all duration-750 ${
          Open ? "w-48" : "w-[85px]"
        }`}
      >
        <button type="button" onClick={() => navigate("/")} className="flex items-center justify-center bg-azulOscuro text-white font-semibold text-lx h-10 w-full rounded-3xl hover:bg-blue-950">
          <span
            className={`ml-2 mr-2 transition-all duration-300 ${
              Open ? "opacity-100 " : "opacity-0 hidden"
            }`}
          >
            Cerrar Sesión
          </span>
          <FaArrowRightFromBracket
            size={20}
            className="flex items-center justify-center "
          />
        </button>
      </div>
    </nav>
  );
}
