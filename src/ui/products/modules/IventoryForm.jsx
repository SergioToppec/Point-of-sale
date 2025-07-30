import React, { useState } from 'react';

// observacion esste ya tiene validacionnes solamente cuuando se ingrese un procdcuto nuevo
const normalizarTexto = (texto) => {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/\s+/g, ''); 
};

const InventoryForm = ({ onClose, onAdd, productosExistentes = [] }) => {
  const [clave, setClave] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = () => {
    const nuevosErrores = {};

    if (!clave.trim()) nuevosErrores.clave = 'La clave es obligatoria';
    if (!descripcion.trim()) nuevosErrores.descripcion = 'La descripción es obligatoria';
    if (!cantidad || isNaN(cantidad) || parseInt(cantidad) < 0) nuevosErrores.cantidad = 'Cantidad inválida';
    if (!precio || isNaN(precio) || parseFloat(precio) < 0) nuevosErrores.precio = 'Precio inválido';

    const claveNorm = normalizarTexto(clave);
    const descripcionNorm = normalizarTexto(descripcion);

    const claveRepetida = productosExistentes.some(
      (p) => normalizarTexto(p.clave) === claveNorm
    );
    const descripcionRepetida = productosExistentes.some(
      (p) => normalizarTexto(p.descripcion) === descripcionNorm
    );

    if (claveRepetida) nuevosErrores.clave = 'La clave ya existe';
    if (descripcionRepetida) nuevosErrores.descripcion = 'La descripción ya existe';

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onAdd({
      clave: clave.trim(),
      descripcion: descripcion.trim(),
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[460px] rounded-md shadow-lg overflow-hidden">
        <div className="bg-[#395886] text-white text-lg font-bold px-6 py-3">Nuevo producto</div>
        <div className="p-6 space-y-4 text-sm">
          {/* Clave */}
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Clave de producto:</label>
            <div className="w-1/2">
              <input
                type="text"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                className="w-full bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
              />
              {errores.clave && <p className="text-red-500 text-xs text-right">{errores.clave}</p>}
            </div>
          </div>

          {/* Descripción */}
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Descripción:</label>
            <div className="w-1/2">
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
              />
              {errores.descripcion && <p className="text-red-500 text-xs text-right">{errores.descripcion}</p>}
            </div>
          </div>

          {/* Cantidad */}
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Cantidad:</label>
            <div className="w-1/2">
              <input
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="w-full bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
              />
              {errores.cantidad && <p className="text-red-500 text-xs text-right">{errores.cantidad}</p>}
            </div>
          </div>

          {/* Precio jajaa saquen persona de nuevo */}
          <div className="flex justify-between items-center">
            <label className="font-semibold w-1/2 text-left">Precio:</label>
            <div className="w-1/2">
              <input
                type="number"
                step="0.01"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-full bg-[#D5DEEF] border border-gray-300 px-2 py-1 text-right rounded"
              />
              {errores.precio && <p className="text-red-500 text-xs text-right">{errores.precio}</p>}
            </div>
          </div>
        </div>

        {/* Botones de agregar */}
        <div className="flex justify-between px-6 pb-5">
          <button
            onClick={handleSubmit}
            className="bg-[#395886] hover:bg-[#314d71] text-white px-4 py-2 rounded"
          >
            Agregar
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

export default InventoryForm;
