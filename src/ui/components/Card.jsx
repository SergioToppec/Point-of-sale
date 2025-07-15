export default function Card({ icon, text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full ${className}`}
    >
      <span className="flex flex-col items-center justify-center">{icon}</span>
      <span  className="text-center mb-3">{text}</span>
    </button>
  );
}
