import { useState } from "react";
import { IoStar } from "react-icons/io5";

import "./styles.css";

const stars = [...Array(5)]; // created array of 5 undefined elements with spread operator

export default function Stars() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIdx(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIdx(index);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(selectedIdx);
  };

  const getReview = (selectedIdx: number) => {
    switch (selectedIdx) {
      case 1:
        return "Bad";
      case 2:
        return "Poor";
      case 3:
        return "Fair";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
    }
  };

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
