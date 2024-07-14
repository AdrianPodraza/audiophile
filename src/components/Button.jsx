function Button({ title, className, icon }) {
  return (
    <button className={className}>
      {title} {icon}
    </button>
  );
}
export default Button;
