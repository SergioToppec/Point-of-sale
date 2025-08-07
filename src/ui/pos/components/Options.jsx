import Card from "@/ui/components/Card";
import { BsCashCoin } from "react-icons/bs";
import {
  FaBox,
  FaBoxesStacked,
  FaCashRegister,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";

export default function Options() {
  const options = [
    {
      icon: <FaUser size={30} />,
      title: "Cliente",
      subtitle: "F1",
    },
    {
      icon: <FaUserPlus size={30} />,
      title: "Nuevo cliente",
      subtitle: "F2",
    },
    {
      icon: <FaCashRegister size={30} />,
      title: "Corte de caja",
      subtitle: "F5",
    },
    {
      icon: <FaBox size={30} />,
      title: "Buscar producto",
      subtitle: "F3",
    },
    {
      icon: <FaBoxesStacked size={30} />,
      title: "Existencia producto",
      subtitle: "F4",
    },
    {
      icon: <BsCashCoin size={30} />,
      title: "Moneda",
      subtitle: "F6",
    },
  ];
  const userinfo = [
    {
      id: 1,
      name: "Arturo",
    },
  ];
  const product = [
    {
      codigo: "Prdt001",
    },
  ];

  return (
    <div className="flex flex-row w-full bg-gray-100">

      <div className="flex flex-col items-center justify-center h-10 w-80">
        <div className="flex flex-row justify-between h-full w-full border-[1px] rounded-tl-lg border-gray-400">
          <label className="flex flex-col h-full w-36 bg-azulOscuro  rounded-tl-[6px] text-white font-medium p-3">
            Código cliente
          </label>
          <label className="flex flex-1 items-center justify-center text-black">
            {userinfo[0].id}
          </label>
        </div>
        <div className="flex flex-row justify-between h-full w-full border-[1px] rounded-bl-lg border-gray-400">
          <label className="flex flex-col h-full w-36 bg-azulOscuro  rounded-bl-[6px] text-white font-medium p-2">
            Nombre cliente
          </label>
          <label className="flex flex-1 items-center justify-center text-black">
            {userinfo[0].name}
          </label>
        </div>
        <div className="flex flex-row justify-between h-full w-full border-[1px] rounded-l-lg border-gray-400">
          <label className="flex flex-col h-full w-36 bg-azulOscuro  rounded-l-[6px] text-white font-medium p-2">
            Producto
          </label>
          <label className="flex flex-1 items-center justify-center text-black">
            {product[0].codigo}
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center gap-4">
        {options.map((option, index) => (
          <Card
            key={index}
            className="h-32 w-24 rounded-lg hover:opacity-90 bg-azulOscuro text-white"
            icon={option.icon}
            title={option.title}
            titleClassName="break-words text-center text-sm font-medium"
            subtitle={option.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
