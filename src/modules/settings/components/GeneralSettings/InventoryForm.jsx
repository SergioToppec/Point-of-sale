import { FaCircleExclamation } from "react-icons/fa6";
import Tooltip from "@/ui/components/Tooltip";

export default function InventoryForm() {
  return (
    <div className="flex flex-col items-center w-full h-full mt-4">
      <label className="text-2xl text-azulOscuro font-medium">
        Configuración de inventario
      </label>
      <form className="flex flex-col items-center justify-between w-full">
        <div className="grid grid-cols-2 justify-between items-center w-full mt-4">
          <div className="flex flex-row items-center justify-start ml-4 mt-4">
            <Tooltip className="bg-azulOscuro text-white" text="Información adicional sobre la opción 1">
              <FaCircleExclamation
                size={18}
                className="text-azulOscuro hover:text-azulFuerte mr-2"
              />
            </Tooltip>
            <input
              type="checkbox"
              name="Opción 1"
              className="h-4 w-4 accent-azulOscuro mr-2"
            />
            <span className="text-lg font-medium">Opción 1</span>
          </div>
          <div className="flex flex-row items-center justify-start ml-4 mt-4">
            <Tooltip className="bg-azulOscuro text-white" text="Información adicional sobre la opción 2">
              <FaCircleExclamation
                size={18}
                className="text-azulOscuro hover:text-azulFuerte mr-2"
              />
            </Tooltip>
            <input
              type="checkbox"
              name="Opción 2"
              className="h-4 w-4 accent-azulOscuro mr-2"
            />
            <span className="text-lg font-medium">Opción 2</span>
          </div>
        </div>
      </form>
    </div>
  );
}