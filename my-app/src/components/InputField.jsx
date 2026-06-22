const InputField = ({ icon, type = "text", placeholder, mb = "20px" }) => {
  return (
    <div style={{ marginBottom: mb }}>
      <div className="relative w-full h-14 transition-colors">
        <input
          type={type}
          id={placeholder}
          className="w-full outline-none"
          placeholder=" "
          className="peer w-full h-full px-12 border border-gray-300 rounded-xl card-shadow focus:outline-none focus:border-green-500"
        />
        <label
          htmlFor={placeholder}
          className="absolute inset-0 flex items-center text-gray-400 px-5 pointer-events-none"
        >
          {icon}
        </label>

        <span
          className="
          absolute top-1/2 left-13 -translate-y-1/2 bg-white px-1 text-gray-400 pointer-events-none transition-all duration-200 peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-gray-500 peer-not-placeholder-shown:-translate-y-9 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400
        "
        >
          {placeholder}
        </span>
      </div>
    </div>
  );
};

export default InputField;
