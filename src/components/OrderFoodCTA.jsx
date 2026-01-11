import motocycle from "../icons_assets/motocycle.svg";

export default function OrderFoodCTA() {
  return (
    <button className="order-food-btn">
      Order a delivery <img src={motocycle} />
    </button>
  );
}
