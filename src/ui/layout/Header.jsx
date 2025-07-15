import { FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Inicio";
      case "/dashboard/pos":
        return "Caja";
      case "/dashboard/products":
        return "Inventario";
      case "/dashboard/clients":
        return "Clientes";
      case "/dashboard/billings":
        return "Facturación";
      case "/dashboard/payments":
        return "Pagos";
      case "/dashboard/reports":
        return "Reportes";
      case "/dashboard/settings":
        return "Configuración";
              case "/dashboard/settings/general":
        return "Configuración general";
      case "/dashboard/permissions":
        return"Permisos o accesos";
        
    }
  };

  return (
    <nav className="flex flex-row  w-full h-16 border-b-[1px] border-gray-200 shadow-sm">
      <h1 className="font-medium text-2xl text-azulOscuro p-4">{getTitle()}</h1>

      <div className=" flex items-end ml-auto mr-6 w-auto h-full text-azulOscuro text-lg font-medium">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center gap-2">
            <span className="">Sergio Torres</span>
            <FaRegCircleUser size={25} className="text-2xl" />
          </div>
          <span className="font-normal text-sm">Administrador</span>
        </div>
      </div>
    </nav>
  );
}
