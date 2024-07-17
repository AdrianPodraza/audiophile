import { useNavigate } from "react-router-dom";

function Button({ title, className, icon, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {title} {icon}
    </button>
  );
}
export default Button;
