import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "./Navigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav-container">
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          {navigation.map((item) => (
            <li key={item.url}>
              <Link
                to={`/${item.url}`}
                className="link"
                onClick={() => setIsOpen(false)}
              >
                {item.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
