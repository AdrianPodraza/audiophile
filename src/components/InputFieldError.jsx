function InputFieldError({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  errorMessage,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="font-bold text-red-500" htmlFor={name}>
          {label}
        </label>
        <span className="text-red-500">{errorMessage}</span>
      </div>
      <input
        className="rounded-lg border-2 border-red-500 px-4 py-3 font-bold caret-orange-primary outline-none focus:border-orange-primary focus:ring-0"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputFieldError;
