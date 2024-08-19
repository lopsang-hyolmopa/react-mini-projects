import { useState } from "react";
import { imageURL } from "../constants";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import Heading from "./Heading";
import Form from "./Form";

export default function CurrencyConverter() {
  const [currencyFrom, setCurrencyFrom] = useState<string>("npr");
  const [currencyTo, setCurrencyTo] = useState<string>("usd");
  const currencyInfo = useCurrencyInfo(currencyFrom);

  const currencyOptions = Object.keys(currencyInfo);
  
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-center bg-cover text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageURL})`,
      }}
    >
      <div className="w-full max-w-md rounded-lg p-4 border border-gray-50 backdrop-blur-sm bg-black/20">
        <Heading />
        <Form currencyFrom={currencyFrom} currencyTo={currencyTo} currencyOptions={currencyOptions} />
      </div>
    </div>
  );
}
