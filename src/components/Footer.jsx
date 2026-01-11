import logo from "../icons_assets/littlelemonlogo.png";
import Contacts from "./Contact";
import Navigation from "./Navigation";
import Socials from "./Socials";

export default function Footer({ children }) {
  return (
    <footer className="background">
      <section className="wrap">
        <img src={logo} />
        <Navigation />
        <Contacts />
        <Socials />
      </section>
    </footer>
  );
}
