export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-xl font-semibold transition duration-300
      bg-blue-600 hover:bg-blue-700 text-white
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}`}
    >
      {children}
    </button>
  );
}