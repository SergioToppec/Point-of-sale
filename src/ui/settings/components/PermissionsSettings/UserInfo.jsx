import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Toggle from "../../../components/Toggle";
import { useState } from "react";

export default function UserInfo() {
  const [isToggled, setIsToggled] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const users = [
    {
      name: "Sergio Joel Trujillo Torres",
      email: "sergiojoel072@gmail.com",
      role: "Administrador",
      caja: 1,
    },
    {
      name: "Luis Arturo Ortiz Barajas",
      email: "sora9090@gmail.com",
      role: "Cajero",
      caja: 2,
    },
  ];

    const handleNextUser = () => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  const handlePreviousUser = () => {
    if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
    }
  };



  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3">
      <p className="text-azulOscuro text-lg font-semibold">
        Permisos de Usuario
      </p>

      <div className="flex flex-row items-center justify-center px-2">
        <span className="text-sm font-medium">Usuario activo</span>
        <Toggle
          isChecked={isToggled}
          onChange={(e) => setIsToggled(e.target.checked)}
          label={isToggled ? "Activo" : "Inactivo"}
        />
      </div>

      <div className="flex flex-row items-center justify-center text-azulOscuro p-2 gap-2">
        <FaArrowCircleLeft
          className={`text-gray-400 cursor-pointer ${
            currentUserIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePreviousUser}
        />
        <FaArrowCircleRight
          className={`cursor-pointer ${
            currentUserIndex === users.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextUser}
        />
      </div>
      </div>
    </div>
  );
}
