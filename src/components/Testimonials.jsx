import TestimonialCard from "./TestimonialCard";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";

const testimonialsItems = [
  {
    id: 1,
    rating: 4,
    userName: "Argo",
    review: "Everything was fantastic.",
    img: greekSalad,
  },
  {
    id: 2,
    rating: 5,
    userName: "Pendo",
    review: "Everything was fantastic and even more.",
    img: bruchetta,
  },
  {
    id: 3,
    rating: 4,
    userName: "Rensa",
    review: "Great food.",
    img: lemonDessert,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section background">
      <h2 className="sub-title">Testimonials</h2>
      <div className="testimonials-wrapper wrap">
        {testimonialsItems.map((item) => (
          <TestimonialCard
            key={item.id}
            rating={item.rating}
            img={item.img}
            userName={item.userName}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
}
