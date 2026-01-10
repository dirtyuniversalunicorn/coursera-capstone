import logo from "../icons_assets/Logo.svg";

export default function Header({ children }) {
  return (
    <header>
      <img src={logo} />
      {children}
    </header>
  );
}
