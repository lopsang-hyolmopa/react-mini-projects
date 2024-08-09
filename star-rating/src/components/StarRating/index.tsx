import Stars from "../Stars";
import "./styles.css";

export default function StarRating() {
  return (
    <section className="layout">
      <div className="container">
        <h1>Rate your experience</h1>
        <p>
          We highly value your feedback! Kindly take a moment to rate your
          experience and provide us with your valuable feedback.
        </p>
        <Stars />
      </div>
    </section>
  );
}
