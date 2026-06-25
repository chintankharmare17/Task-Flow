export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="space-y-2">

      <label className="font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

    </div>
  );
}