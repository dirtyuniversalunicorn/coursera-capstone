const socialsItems = [
  { url: "https://facebook.com", name: "Facebook" },
  { url: "https://instagram.com", name: "Instagram" },
  { url: "https://youtube.com", name: "Youtube" },
];

export default function Socials() {
  return (
    <ul className="socials">
      {socialsItems.map((item) => (
        <li key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
