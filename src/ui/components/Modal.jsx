export default function Modal({ children, onClose, className="" }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-15" onClick={onClose} />
      <div className={`modal-base-styles ${className}`}>
        {children}
      </div>
    </div>
  );
}
