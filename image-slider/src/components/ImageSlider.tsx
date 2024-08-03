import { useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCircleFill,
} from "react-icons/bs";

import { Image } from "../types";

type ImageSliderProps = {
  images: Image[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState<number>(0);

  const totalImages = images.length;
  const handlePrevious = () => {
    setCurrent(current === 0 ? totalImages - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === totalImages - 1 ? 0 : current + 1);
  };

  return (
    <section>
      <div className="relative flex justify-center items-center w-[600px] h-[450px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute left-4 size-6 cursor-pointer"
        />
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={`Image by ${image.author}`}
            className={`${
              current === index ? "block" : "hidden"
            } rounded-lg size-full`}
          />
        ))}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute right-4 size-6 cursor-pointer"
        />
        <span className="absolute flex bottom-4">
          {images.map((_, index) => (
            <BsCircleFill
              key={index}
              onClick={() => setCurrent(index)}
              className={`${
                current === index ? "text-white" : "text-gray-400"
              } mr-1 size-2.5 cursor-pointer`}
            />
          ))}
        </span>
      </div>
    </section>
  );
}
