export default function Toggle({ isChecked, onChange, label}) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only" // Oculta el checkbox
        />
        <div
          className={`w-10 h-5 bg-gray-300 rounded-full shadow-inner transition ${
            isChecked ? "bg-[#395886]" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition ${
            isChecked ? "translate-x-5" : "translate-x-1"
          } top-1/2 -translate-y-1/2`}
        ></div>
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}