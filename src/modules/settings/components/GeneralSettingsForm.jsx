import { FaCircleExclamation } from "react-icons/fa6";

export default function GeneralSettingsForm() {
  return (
    <div className="flex flex-col items-center w-full h-full  mt-4">
      <label className="text-2xl text-azulOscuro font-medium">
        Configuración general
      </label>
      <form className="flex flex-col items-center justify-between w-full">
        <div className="grid grid-cols-2 justify-between items-center w-full mt-4 ">
        <div className="flex flex-row items-center justify-start ml-4 mt-4">
          <span>
            <FaCircleExclamation size={18} title="ola arturo" tooltip="Información adicional sobre la opción 1" className="text-azulOscuro hover:text-azulFuerte mr-2" />
          </span>
          <input
            type="checkbox"
            name="Opción 1"
            className="h-4 w-4 accent-azulOscuro mr-2"
          />
          <span className="text-lg font-medium">Opción 1</span>
        </div>
        <div className="flex flex-row items-center justify-start ml-4 mt-4">
          <span>
            <FaCircleExclamation size={18} className="text-azulOscuro hover:text-azulFuerte mr-2" />
          </span>
          <input
            type="checkbox"
            name="Opción 1"
            className="h-4 w-4 accent-azulOscuro mr-2"
          />
          <span className="text-lg font-medium">Opción 2</span>
        </div>
                <div className="flex flex-row items-center justify-start ml-4 mt-4">
          <span>
            <FaCircleExclamation size={18} className="text-azulOscuro mr-2" />
          </span>
          <input
            type="checkbox"
            name="Opción 1"
            className="h-4 w-4 accent-azulOscuro mr-2"
          />
          <span className="text-lg font-medium">Opción 3</span>
        </div>
        <div className="flex flex-row items-center justify-start ml-4 mt-4">
          <span>
            <FaCircleExclamation size={18} className="text-azulOscuro mr-2 hover:text-azulFuerte" />
          </span>
          <input
            type="checkbox"
            name="Opción 1"
            className="h-4 w-4 accent-azulOscuro mr-2"
          />
          <span className="text-lg font-medium">Opción 4</span>
        </div>
        </div>
      </form>
    </div>
  );
}
