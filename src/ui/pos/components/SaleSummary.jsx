import { FaRegTrashAlt } from "react-icons/fa";

export default function SaleSummary() {
  const sales = [
    {
      product: "Producto 1",
      quantity: 2,
      price: 10.0,
      button: (
        <button className="flex items-center justify-center bg-rojoFuerte hover:opacity-85 text-white font-white rounded-[5px] w-8 h-6">
          <FaRegTrashAlt />
        </button>
      ),
    },
    {
      product: "Producto 2",
      quantity: 1,
      price: 15.0,
      button: (
        <button className="flex items-center justify-center bg-rojoFuerte hover:opacity-85 text-white font-white rounded-[5px] w-8 h-6">
          <FaRegTrashAlt />
        </button>
      ),
    },
    {
      product: "Producto 3",
      quantity: 3,
      price: 7.5,
      button: (
        <button className="flex items-center justify-center bg-rojoFuerte hover:opacity-85 text-white font-white rounded-[5px] w-8 h-6">
          <FaRegTrashAlt />
        </button>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-w-full">
      <h1 className="text-xl font-bold text-azulOscuro">Resumen de venta</h1>
      <table className="flex flex-col rounded-lg mt-4 mb-5 shadow-md border border-gray-300 ">
        <thead className="flex flex-row">
          <tr className="grid grid-cols-4 w-full rounded-t-lg p-2 bg-azulOscuro text-white ">
            <th className="text-left font-semibold">Producto</th>
            <th className="text-left font-semibold">Cantidad</th>
            <th className="text-left font-semibold">Precio</th>
            <th className="text-left font-semibold">Eliminar</th>
          </tr>
        </thead>
        <tbody className="flex flex-col min-h-[18vw] ">
          {sales.map((sale, index) => (
            <tr
              className="grid grid-cols-4 items-center h-10 border-b-2 border-gray-300 text-azulFuerte"
              key={index}
            >
              <td className="p-2">{sale.product}</td>
              <td className="p-2 ml-8">{sale.quantity}</td>
              <td className="p-2">${sale.price.toFixed(2)}</td>
              <td className="p-2">{sale.button}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1 className="text-xl font-bold text-azulOscuro">Pago</h1>
        <div className="flex flex-col">
          <span>Subtotal</span>
          <span className="ml-auto">
            $
            {sales
              .reduce((acc, sale) => acc + sale.price * sale.quantity, 0)
              .toFixed(2)}
          </span>
          <span>Descuento</span>
          <span className="ml-auto">
            -$
            {(
              sales.reduce((acc, sale) => acc + sale.price * sale.quantity, 0) *
              0.1
            ).toFixed(2)}
          </span>
          <span>Impuesto</span>
          <div className="grid grid-cols-2">
            <h1 className="text-azulOscuro font-bold text-xl">Total</h1>
            <p>
              $
              {(
                sales.reduce(
                  (acc, sale) => acc + sale.price * sale.quantity,
                  0
                ) * 1.1
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-rojoFuerte rounded-md text-white font-medium w-28 h-8">
          Cancelar
        </button>
        <button className="bg-azulOscuro rounded-md text-white font-medium w-28 h-8">
          Pagar
        </button>
      </div>
    </div>
  );
}
