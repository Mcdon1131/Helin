import googleIcon from "../assets/google-icon-1.png";
import { Link } from "react-router-dom";
const Button = ({ name, bgColor = "black", icon = "" }) => {
  let iconSrc = icon === "googleIcon" ? googleIcon : icon;
  return (
    <Link
      style={{ backgroundColor: bgColor }}
      className={`flex items-center justify-center w-full px-10 py-3 rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.3)] text-white`}
      to="#"
    >
      <span>
        <img width={icon ? "20" : undefined} height="20" src={iconSrc} alt="" />
      </span>
      <span className="ml-4  text-center">{name}</span>
    </Link>
  );
};

export default Button;
