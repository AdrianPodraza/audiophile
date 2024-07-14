import { useNavigate } from "react-router-dom";

function Button({ title, className, icon, slug }) {
  const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(`/product/${slug}`)}>
      {title} {icon}
    </button>
  );
}
export default Button;
