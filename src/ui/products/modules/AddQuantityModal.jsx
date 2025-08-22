import React, { useState } from "react";

const AddQuantityModal = ({ producto, onClose, onAdd }) => {
  const [cantidad, setCantidad] = useState("");

  const handleAdd = () => {
    const cantidadNum = parseInt(cantidad);
    if (!isNaN(cantidadNum) && cantidadNum > 0) {
      onAdd(cantidadNum);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-sans">
      <div className="bg-white w-[360px] rounded-md shadow-lg overflow-hidden">
        <div className="bg-azulOscuro text-white text-lg font-bold px-6 py-3 font-sans">
          Cantidad
        </div>
        <div className="p-6 space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <label className="font-bold w-1/2 text-left text-lg">Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-1/2 bg-azulClaro border border-gray-300 px-2 py-1 text-right rounded"
            />
          </div>
        </div>
        <div className="flex justify-between px-6 pb-5">
          <button
            onClick={handleAdd}
            className="bg-azulOscuro hover:bg-azulFuerte text-white px-4 py-2 rounded"
          >
            Agregar
          </button>
          <button
            onClick={onClose}
            className="bg-rojoFuerte hover:bg-[#92110f] text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuantityModal;
