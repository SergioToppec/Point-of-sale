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
import { useState } from "react";

export default function Options() {
  // const navigate = useNavigate();
  const [showGeneralSettings, setShowGeneralSettings] = useState(false);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 xr:grid-cols-5 xy:grid-cols-6 xt:grid-cols-7 gap-4 h-full w-full">
      <Card
        className="h-32 w-36 max-w-auto min-w-32 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaGears className="text-[50px] mt-4 mb-2t" />}
        text={"Configuración general"}
        onClick={() => setShowGeneralSettings(true)}
      />
      {showGeneralSettings && (
        <GeneralSettings onClose={() => setShowGeneralSettings(false)} />
      )}
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaCloudArrowUp className="text-[50px] mt-4 mb-2" />}
        text={"Respaldar"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<MdCloudSync className="text-[50px] mt-4 mb-2" />}
        text={"Restaurar"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaUsers className="text-[50px] mt-4 mb-2" />}
        text={"Cajeros"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<HiMiniPresentationChartBar className="text-[50px] mt-4 mb-2" />}
        text={"Reportes"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaCashRegister className="text-[50px] mt-4 mb-2" />}
        text={"Cortes de cajas"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<BiSolidSpreadsheet className="text-[50px] mt-4 mb-2" />}
        text={"Configuración tickets"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaCoins className="text-[50px] mt-4 mb-2" />}
        text={"Monedas"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<MdOutlineScale className="text-[50px] mt-4 mb-2" />}
        text={"Basculas"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<MdOutlinePayments className="text-[50px] mt-4 mb-2" />}
        text={"Formas de pago"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={
          <div className="grid grid-cols-2 h-auto -m-[2px]">
            <FaComputerMouse className="text-[25px] mt-5" />
            <HiMiniPrinter className="text-[35px] mt-4" />
            <FaKeyboard className="text-[35px] mb-1 -mt-2" />
          </div>
        }
        text={"Periféricos"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaListCheck className="text-[50px] mt-4 mb-2" />}
        text={"Permisos"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaCalculator className="text-[50px] mt-4 mb-2" />}
        text={"Impuestos"}
        //onClick={() => navigate("/Settings-General")}
      />
      <Card
        className="h-32 w-36 max-w-auto min-w-36 rounded-lg bg-azulClaro text-azulOscuro text-lg font-semibold"
        icon={<FaNoteSticky className="text-[50px] mt-4 mb-2" />}
        text={"Folio"}
        //onClick={() => navigate("/Settings-General")}
      />
    </div>
  );
}
