import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

type FaqProps = {
  title: string;
  info: string;
};

export default function Faq({ title, info }: FaqProps) {
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);

  const toogleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="mb-2">
      <div
        className="bg-brandGray flex justify-between items-center p-6 lg:px-4 lg:py-6 cursor-pointer hover:bg-brandGray-light"
        onClick={toogleInfo}
      >
        <p className="text-lg lg:text-2xl">{title}</p>
        {isInfoVisible ? (
          <AiOutlineClose className="size-6 lg:size-12" />
        ) : (
          <AiOutlinePlus className="size-6 lg:size-12" />
        )}
      </div>
      {isInfoVisible && (
        <div className="bg-brandGray mt-px p-6 lg:px-4 py-6">
          <p className="text-lg lg:text-2xl">{info}</p>
        </div>
      )}
    </div>
  );
}
