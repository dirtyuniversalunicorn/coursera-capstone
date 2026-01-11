import logo from "../icons_assets/Logo.svg";

export default function Header({ children }) {
  return (
    <header>
      <div className="wrap">
        <img src={logo} />
        {children}
      </div>
    </header>
  );
}
