import { MdOutlineSwapVert } from "react-icons/md";

import { formEvent } from "../types";
import InputBox from "./InputBox";

type FormProps = {
  currencyFrom: string;
  currencyTo: string;
  currencyOptions: string[];
};

export default function Form({
  currencyFrom,
  currencyTo,
  currencyOptions,
}: FormProps) {
  const handleSubmit = (e: formEvent) => {
    e.preventDefault();
    console.log("Form submit test");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full mb-2">
        <InputBox
          label="From"
          currencyOptions={currencyOptions}
          placeholderText="Enter amount"
        />
      </div>
      <div className="relative w-full h-0.5">
        <button
          type="button"
          className="absolute flex items-center left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-600 text-white px-4 py-1.5 hover:bg-orange-500"
        >
          <MdOutlineSwapVert size={32} /> Swap 
        </button>
      </div>
      <div className="mb-4">
        <InputBox
          label="To"
          currencyOptions={currencyOptions}
          placeholderText="Converted amount"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-600 rounded p-3 text-xl hover:bg-orange-500"
      >
        Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
      </button>
    </form>
  );
}
