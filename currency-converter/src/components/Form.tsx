import { useState } from "react";
import { MdOutlineSwapVert } from "react-icons/md";

import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { formEvent } from "../types";

export default function Form() {
  const [currencyFrom, setCurrencyFrom] = useState<string>("npr");
  const [currencyTo, setCurrencyTo] = useState<string>("usd");

  const currencyInfo = useCurrencyInfo(currencyFrom);

  const currencyOptions = Object.keys(currencyInfo);
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
        //   setCurrencyFrom={setCurrencyFrom}
        />
      </div>
      <div className="relative w-full h-1.5">
        <button
          type="button"
          className="absolute flex items-center left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-teal-600 text-white px-4 py-1.5 hover:bg-teal-500"
        >
          <MdOutlineSwapVert size={28} /> Swap
        </button>
      </div>
      <div className="mb-4">
        <InputBox
          label="To"
          currencyOptions={currencyOptions}
          placeholderText="Converted amount"
        //   setCurrencyTo={setCurrencyTo}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 rounded p-3 text-xl hover:bg-teal-500"
      >
        Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
      </button>
    </form>
  );
}
