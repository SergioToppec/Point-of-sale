import HeaderModal from "../../components/HeaderModal"
import Modal from "../../components/Modal"
import PermissionsView from "../components/PermissionsSettings/PermissionsView"

export default function Permissions({ onClose }) {
    return(
        <Modal
        onClose={onClose}
        className="relative z-10 bg-white rounded-lg shadow-lg h-[500px] w-[900px]"
        >
            <HeaderModal
            onClose={onClose}
            className="bg-azulOscuro rounded-t-lg"
            closeButtonColor="text-gray-100"
            />
            <PermissionsView />

        </Modal>
    )
}