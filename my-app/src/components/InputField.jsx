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
          className="border inset-0 flex items-center text-gray-400 px-5 pointer-events-none"
        >
          {icon}
        </label>
      </div>
    </div>
  );
};

export default InputField;
