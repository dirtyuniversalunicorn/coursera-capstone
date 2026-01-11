import Button from "./Button";
import FoodCard from "./FoodCard";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";

const foodItems = [
  {
    title: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    picture: greekSalad,
  },
  {
    title: "Bruchetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    picture: bruchetta,
  },
  {
    title: "Lemon Dessert",
    price: 5,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    picture: lemonDessert,
  },
];

export default function Specials() {
  return (
    <section className="specials-section wrap">
      <div className="specials-section-col1">
        <h2 className="sub-title">Specials</h2>
        <Button>Online Menu</Button>
      </div>
      <div className="card-wrapper">
        {foodItems.map((item) => (
          <FoodCard
            key={item.title}
            picture={item.picture}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
