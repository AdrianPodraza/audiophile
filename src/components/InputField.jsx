function InputField({ type, placeholder, label, textColor }) {
  return (
    <div className="flex flex-col">
      <label className={`${textColor} font-bold`} htmlFor={label}>
        {label}
      </label>
      <input
        className="rounded-lg border-2 border-gray-200 px-4 py-3 font-bold caret-orange-primary outline-none focus:border-orange-primary focus:ring-0"
        type={type}
        name={label}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
