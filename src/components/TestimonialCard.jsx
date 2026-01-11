import { AiFillStar } from "react-icons/ai";

export default function TestimonialCard({ rating, img, userName, review }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-detail">
        <h3>{rating}</h3>
        {Array.from({ length: rating }, (_, index) => (
          <AiFillStar key={index} color="#F4CE14" stroke="black" />
        ))}
      </div>
      <div className="testimonial-detail">
        <img src={img} />
        <span>{userName}</span>
      </div>
      <p>{review}</p>
    </div>
  );
}
