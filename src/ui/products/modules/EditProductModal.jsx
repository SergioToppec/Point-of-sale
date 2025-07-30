import React, { useState, useEffect } from 'react';

const EditProductModal = ({ producto, onClose, onUpdate }) => {
  const [clave, setClave] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (producto) {
      setClave(producto.clave || '');
      setDescripcion(producto.descripcion || '');
      setCantidad(producto.cantidad || '');
      setPrecio(producto.precio || '');
      setMensaje('');
    }
  }, [producto]);

  const handleUpdate = () => {
    if (!clave.trim() || !descripcion.trim()) return;
    if (isNaN(cantidad) || parseInt(cantidad) < 0) return;
    if (isNaN(precio) || parseFloat(precio) < 0) return;

    const noCambio =
      clave.trim() === producto.clave &&
      descripcion.trim() === producto.descripcion &&
      parseInt(cantidad) === producto.cantidad &&
      parseFloat(precio) === producto.precio;

    if (noCambio) {
      setMensaje('No se ha realizado ningún cambio');
      return;
    }

    onUpdate({
      id: producto.id,
      clave: clave.trim(),
      descripcion: descripcion.trim(),
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[460px] rounded-md shadow-lg overflow-hidden">
        <div className="bg-[#395886] text-white text-lg font-bold px-6 py-3">Editar producto</div>
        <div className="p-6 space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Clave de producto:</label>
            <input
              type="text"
              value={clave}
              readOnly
              className="w-1/2 bg-gray-200 border border-gray-300 px-2 py-1 text-right rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Descripción:</label>
            <input
              type="text"
              value={descripcion}
              readOnly
              className="w-1/2 bg-gray-200 border border-gray-300 px-2 py-1 text-right rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={e => setCantidad(e.target.value)}
              className="w-1/2 bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Precio:</label>
            <input
              type="number"
              step="0.01"
              value={precio}
              onChange={e => setPrecio(e.target.value)}
              className="w-1/2 bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
            />
          </div>
          {mensaje && <p className="text-red-500 text-center text-sm">{mensaje}</p>}
        </div>
        <div className="flex justify-between px-6 pb-5">
          <button
            onClick={handleUpdate}
            className="bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-[#B21613] hover:bg-[#92110f] text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
