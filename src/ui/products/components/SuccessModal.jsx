"use client"

const SuccessModal = ({ message, onClose, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">{message}</h2>
        <button
          onClick={onClose}
          className="bg-[#395886] hover:bg-[#314d71] text-white font-medium px-8 py-2 rounded-md"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default SuccessModal
