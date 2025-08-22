import HeaderModal from "../../components/HeaderModal";
import Modal from "../../components/Modal";

export default function DeletedClients({ onClose }) {
  return (
    <Modal onClose={onClose} className="relative z-10 bg-white rounded-lg shadow-lg w-[500px] max-w-full h-[340px]">
      <HeaderModal onClose={onClose} />
      <div className="flex flex-col items-center justify-center  p-4 h-full w-full">
        <p>No hay clientes eliminados</p>
      </div>
    </Modal>
  );
}
