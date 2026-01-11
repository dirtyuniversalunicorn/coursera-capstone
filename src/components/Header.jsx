import { Link } from "react-router-dom";
import logo from "../icons_assets/Logo.svg";

export default function Header({ children }) {
  return (
    <header>
      <div className="wrap">
        <Link to="/">
          <img src={logo} />
        </Link>
        {children}
      </div>
    </header>
  );
}
