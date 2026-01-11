import { Link } from "react-router-dom";

const navigation = [
  { url: "", page: "home" },
  { url: "/about", page: "about" },
  { url: "/menu", page: "menu" },
  { url: "/testimonials", page: "testimonials" },
  { url: "/order-online", page: "order online" },
  { url: "/login", page: "login" },
];

export default function Navigation() {
  return (
    <nav>
      <ul>
        {navigation.map((navigationItem) => (
          <Link
            key={navigationItem.url}
            to={`/${navigationItem.url}`}
            className="link"
          >
            <li>{navigationItem.page}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
