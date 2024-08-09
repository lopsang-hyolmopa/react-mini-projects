import { useState } from "react";

export default function useStarRating(initialRating: number = 0) {
  const [selectedIdx, setSelectedIdx] = useState<number>(initialRating);
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const handleClick = (index: number) => setSelectedIdx(index);
  const handleMouseEnter = (index: number) => setHoveredIdx(index);
  const handleMouseLeave = () => setHoveredIdx(selectedIdx);

  const getReview = (selectedIdx: number) => {
    switch (selectedIdx) {
      case 1:
        return "Bad 😡";
      case 2:
        return "Poor 🙁";
      case 3:
        return "Fair 🙂";
      case 4:
        return "Good 😊";
      case 5:
        return "Excellent 😁";
    }
  };

  return {
    selectedIdx,
    hoveredIdx,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    getReview,
  };
}
