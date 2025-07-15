import Modal from "../../components/Modal";
import CustomerForm from "../../../modules/clients/components/AddClientForm";
import HeaderModal from "../../components/HeaderModal";
import EditClientForm from "../../../modules/clients/components/EditClientForm";

export default function EditClient({onClose}) {

  return (
    <Modal onClose={onClose} className="relative z-10 bg-white rounded-lg shadow-lg w-[700px]  h-[400px]">
      <HeaderModal onClose={onClose}/>
      <div>
      <EditClientForm onClose={onClose} />
      </div>
    </Modal>
  );
}
