import image1 from "../icons_assets/Mario and Adrian A.jpg";
import image2 from "../icons_assets/Mario and Adrian b.jpg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-wrapper wrap">
        <h1>Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
        <p className="lead-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aliquid porro tempore, aspernatur magni iste fugiat blanditiis quidem
          itaque, quisquam minus quod, aut consequuntur at maiores soluta animi
          sint eligendi.
        </p>
      </div>
      <div className="image-stack">
        <img src={image2} />
        <img src={image1} />
      </div>
    </section>
  );
}
