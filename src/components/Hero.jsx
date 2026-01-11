import Button from "./Button";
import restaurantChefB from "../icons_assets/restaurant chef B.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section background-2">
      <div className="wrap">
        <div className="hero-section-col1">
          <h1>Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
          <p className="lead-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid porro tempore, aspernatur magni iste fugiat blanditiis
            quidem itaque, quisquam minus quod, aut consequuntur at maiores
            soluta animi sint eligendi.
          </p>
          <Link to="/booking">
            <Button>Reserve a Table</Button>
          </Link>
        </div>
        <div className="hero-section-col2">
          <img src={restaurantChefB} width={500} />
        </div>
      </div>
    </section>
  );
}
