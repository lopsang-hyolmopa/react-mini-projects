import { IoStar } from "react-icons/io5";

import "./styles.css";
import useStarRating from "../../hooks/useStarRating";

const stars = [...Array(5)]; // created array of 5 undefined elements with spread operator

export default function Stars() {
  const {
    selectedIdx,
    hoveredIdx,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    getReview,
  } = useStarRating();

  return (
    <>
      <div className="stars-container">
        {stars.map((_, index) => {
          index += 1; // to make rating starts from 1 (default 0)

          return (
            <IoStar
              key={index}
              className={
                index <= (hoveredIdx || selectedIdx)
                  ? "star-active"
                  : "star-inactive"
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
      <span>{getReview(selectedIdx)}</span>
    </>
  );
}
