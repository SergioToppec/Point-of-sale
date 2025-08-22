import { useState } from "react";
import AddClientModal from "./AddClientModal";
import DeletedClients from "./DeletedClients";


export default function Buttons() {
  const [showaddModal, setShowAddModal] = useState(false);
  const [showdeletedModal, setShowDeletedModal] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 p-2">
      <div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-azulOscuro hover:bg-blue-950 text-white font-medium  w-44 h-10 rounded-[12px]"
        >
          Agregar cliente
        </button>
      </div>
      {showaddModal && (
        <AddClientModal onClose={() => setShowAddModal(false)} />
      )}
      <div>
        <button
          onClick={() => setShowDeletedModal(true)}
          className="bg-azulOscuro hover:bg-blue-950 text-white font-medium  w-44 h-10 rounded-[12px]"
        >
          Clientes eliminados
        </button>
      </div>
      {showdeletedModal && (
        <DeletedClients onClose={() => setShowDeletedModal(false)} />
      )}
    </div>
  );
}
