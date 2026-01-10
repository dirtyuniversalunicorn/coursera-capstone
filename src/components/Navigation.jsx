const navigation = [
  "home",
  "about",
  "menu",
  "testimonials",
  "order online",
  "login",
];

export default function Navigation() {
  return (
    <nav>
      <ul>
        {navigation.map((navigationItem) => (
          <li key={navigationItem}>
            <a href={`/${navigationItem}`}>{navigationItem.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
