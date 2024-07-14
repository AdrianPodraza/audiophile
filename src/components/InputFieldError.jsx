function InputFieldError({ type, placeholder, label }) {
  return (
    <div className="flex max-w-[300px] flex-col">
      <div className="flex justify-between">
        <label className="text-red-500 font-bold" htmlFor={type}>
          {label}
        </label>
        <span className="text-red-500">Wrong format</span>
      </div>
      <input
        className="border-red-500 rounded-lg border-2 px-4 py-3 font-bold caret-orange-primary outline-none focus:border-orange-primary focus:ring-0"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputFieldError;
