export default function HeaderModal({onClose, className="", closeButtonColor="text-gray-500"}) {
  return (
    <div className={`flex items-center justify-end border-b-[5px] border-azulOscuro ${className}`}>
      <button
      type="button"
        onClick={onClose}
        className= {`mr-2 hover:text-rojoFuerte font-semibold text-2xl ${closeButtonColor}`}
      >
        &times;
      </button>
      
    </div>
  );
}
