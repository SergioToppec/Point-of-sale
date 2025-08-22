import Card from "@/ui/components/Card";
import {
  FaGears,
  FaCloudArrowUp,
  FaUsers,
  FaCashRegister,
  FaCoins,
  FaKeyboard,
  FaComputerMouse,
  FaListCheck,
  FaCalculator,
  FaNoteSticky,
} from "react-icons/fa6";
import { MdCloudSync, MdOutlineScale, MdOutlinePayments } from "react-icons/md";
import { HiMiniPresentationChartBar, HiMiniPrinter } from "react-icons/hi2";
import { BiSolidSpreadsheet } from "react-icons/bi";
import GeneralSettings from "../Views/GeneralSettings";
import Permissions from "../Views/Permissions";
import { useState } from "react";

export default function Options() {
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);

  const options = [
    {
      title: "Configuración general",
      icon: <FaGears size={60} className="mt-4 mb-2" />,
      onClick: () => setShowGeneralSettings(true),
    },
    { title: "Respaldar", icon: <FaCloudArrowUp size={55} className="mt-2" /> },
    { title: "Restaurar", icon: <MdCloudSync size={55} className="mt-2" /> },
    { title: "Cajeros", icon: <FaUsers size={55} className="mt-4 mb-2" /> },
    {
      title: "Reportes",
      icon: <HiMiniPresentationChartBar size={55} className=" mt-3 mb-2" />,
    },
    {
      title: "Cortes de cajas",
      icon: <FaCashRegister size={55} className="mt-5 mb-3" />,
    },
    {
      title: "Configuración tickets",
      icon: <BiSolidSpreadsheet size={55} className="mt-5 " />,
    },
    { title: "Monedas", icon: <FaCoins size={55} className="mt-3 mb-3" /> },
    {
      title: "Basculas",
      icon: <MdOutlineScale size={55} className="mt-2 mb-2" />,
    },
    {
      title: "Formas de pago",
      icon: <MdOutlinePayments size={55} className="mt-4 mb-2" />,
    },
    {
      title: "Periféricos",
      icon: (
        <div className="grid grid-cols-2 h-auto -m-[2px]">
          <FaComputerMouse className="text-[25px] mt-5" />
          <HiMiniPrinter className="text-[35px] mt-4" />
          <FaKeyboard className="text-[35px] mb-1 -mt-2" />
        </div>
      ),
    },
    {
      title: "Permisos",
      icon: <FaListCheck size={55} className="mt-4 mb-2" />,
      onClick: () => setShowPermissions(true),
    },
    {
      title: "Impuestos",
      icon: <FaCalculator size={55} className="mt-4 mb-2" />,
    },
    { title: "Folio", icon: <FaNoteSticky size={55} className="mt-4 mb-2" /> },
  ];

  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 xr:grid-cols-6 xy:grid-cols-7 xt:grid-cols-8 gap-3 h-full w-full">
      {options.map((option, index) => (
        <Card
          key={index}
          className="h-[140px] max-h-36 w-36 max-w-auto min-w-[124px] rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
          icon={option.icon}
          title={option.title}
          titleClassName="mb-3 brake-words text-center"
          onClick={option.onClick}
        />
      ))}
      {showGeneralSettings && (
        <GeneralSettings onClose={() => setShowGeneralSettings(false)} />
      )}
      {showPermissions && (
        <Permissions onClose={() => setShowPermissions(false)} />
      )}
    </div>
  );
}
