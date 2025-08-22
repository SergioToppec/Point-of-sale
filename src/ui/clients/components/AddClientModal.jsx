import Modal from "../../components/Modal";
import AddClientForm from "../../../modules/clients/components/AddClientForm";
import HeaderModal from "../../components/HeaderModal";

export default function AddClientModal({onClose}) {

  return (
    <Modal onClose={onClose} className="relative z-10 bg-white rounded-lg shadow-lg w-[700px]  h-[400px]">
      <HeaderModal onClose={onClose}/>
      <div>
      <AddClientForm onClose={onClose} />
      </div>
    </Modal>
  );
}
