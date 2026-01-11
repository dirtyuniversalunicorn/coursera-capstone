const contactItems = [
  {
    adress: "Adress 123, CA, USA",
    phone: "1234567890",
    email: "example@example.com",
  },
];

export default function Contacts() {
  return (
    <div className="contacts">
      {contactItems.map((item) => (
        <ul key={item.adress}>
          <li>{item.adress}</li>
          <li>
            <a href={`tel:${item.phone}`}>{item.phone}</a>
          </li>
          <li>
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}
