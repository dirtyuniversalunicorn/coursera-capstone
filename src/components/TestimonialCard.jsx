import { AiFillStar } from "react-icons/ai";

export default function TestimonialCard({ rating, img, userName, review }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-detail">
        <h3>{rating}</h3>
        <AiFillStar color="#F4CE14" />
      </div>
      <div className="testimonial-detail">
        <img src={img} />
        <span>{userName}</span>
      </div>
      <p>{review}</p>
    </div>
  );
}
