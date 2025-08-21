export default function Card({
  icon,
  image,
  title,
  subtitle,
  onClick,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full ${className}`}
    >
      <span className="flex flex-col items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-16 h-16 object-contain" />
        ) : (
          icon
        )}
      </span>
      <span className={`font-bold ${titleClassName}`}>{title}</span>
      {subtitle && (
        <span className={`text-sm ${subtitleClassName}`}>{subtitle}</span>
      )}
    </button>
  );
}