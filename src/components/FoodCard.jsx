import OrderFoodCTA from "./OrderFoodCTA";

export default function FoodCard({ picture, title, price, description }) {
  return (
    <div className="card">
      <img src={picture} />
      <div className="card-content">
        <div className="card-title-wrap">
          <h3>{title}</h3>
          <span className="secondary-color1">$ {price}</span>
        </div>
        <p>{description}</p>
        <OrderFoodCTA />
      </div>
    </div>
  );
}
