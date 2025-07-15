import Modal from "../../components/Modal";
import HeaderModal from "../../components/HeaderModal";
import SettingsForm from "../components/GeneralSettings/SettingsForm";
export default function GeneralSettings({ onClose }) {
  return (
    <Modal
      onClose={onClose}
      className="relative z-10 bg-white rounded-lg shadow-lg h-[500px] w-[900px]"
    >
      <HeaderModal
        onClose={onClose}
        className="bg-azulOscuro rounded-t-lg"
        closeButtonColor="text-gray-100"
      />
      <div className="flex h-[463px]">
        <SettingsForm />
      </div>
    </Modal>
  );
}
