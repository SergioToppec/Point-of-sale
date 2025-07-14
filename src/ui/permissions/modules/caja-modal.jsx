import { useState } from "react";
import { FaLock, FaCashRegister, FaDollarSign, FaPrint } from "react-icons/fa";
import FondoFijoModal from "../modules/fondo-fijo-modal";
import RedirectingLoader from "../components/RedirectingLoader";
import ReimprimirTicketModal from "../modules/reimprimir-ticket-modal";

const CajaModal = ({ isOpen, onClose }) => {
  const [isFondoFijoOpen, setIsFondoFijoOpen] = useState(false);
  const [showRedirecting, setShowRedirecting] = useState(false);
  const [isReimprimirOpen, setIsReimprimirOpen] = useState(false); // Nuevo estado

  const handleRedirect = () => {
    setShowRedirecting(true);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-[600px] max-w-4xl mx-4">
          {/* Header */}
          <div className="bg-[#395886] text-white p-4 rounded-t-lg">
            <h2 className="text-2xl font-bold text-left">Caja</h2>
          </div>

          
          <div className="p-6">
            <div className="flex gap-3 justify-start mb-6">
              {/* Fondo fijo immportado jajaja vaya mierda */}
              <button
                onClick={() => setIsFondoFijoOpen(true)}
                className="bg-[#395886] hover:bg-[#314d71] text-white p-3 rounded-lg flex flex-col items-center gap-2 transition-colors min-w-[96px]"
              >
                <FaLock className="text-lg" />
                <span className="font-medium text-xs">Fondo fijo</span>
              </button>

              {/* Abrir caja */}
              <button
                onClick={handleRedirect}
                className="bg-[#395886] hover:bg-[#314d71] text-white p-3 rounded-lg flex flex-col items-center gap-2 transition-colors min-w-[96px]"
              >
                <FaCashRegister className="text-lg" />
                <span className="font-medium text-xs">Abrir caja</span>
              </button>

              {/* Cobrar */}
              <button
                onClick={handleRedirect}
                className="bg-[#395886] hover:bg-[#314d71] text-white p-3 rounded-lg flex flex-col items-center gap-2 transition-colors min-w-[96px]"
              >
                <FaDollarSign className="text-lg" />
                <span className="font-medium text-xs">Cobrar</span>
              </button>

              {/* Reimprimir */}
              <button
                onClick={() => setIsReimprimirOpen(true)}
                className="bg-[#395886] hover:bg-[#314d71] text-white p-3 rounded-lg flex flex-col items-center gap-2 transition-colors min-w-[96px]"
              >
                <FaPrint className="text-lg" />
                <span className="font-medium text-xs">Reimprimir</span>
              </button>
            </div>

            {/* Botón salir */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full font-medium transition-colors text-xs w-auto"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modales secundarios o no se xd */}
      {isFondoFijoOpen && (
        <FondoFijoModal isOpen={isFondoFijoOpen} onClose={() => setIsFondoFijoOpen(false)} />
      )}

      {showRedirecting && <RedirectingLoader />}

      {isReimprimirOpen && (
        <ReimprimirTicketModal
          isOpen={isReimprimirOpen}
          onClose={() => setIsReimprimirOpen(false)}
        />
      )}
    </>
  );
};

export default CajaModal;
