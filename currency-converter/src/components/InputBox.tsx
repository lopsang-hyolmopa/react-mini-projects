import { useId } from "react";

import { uppercaseCurrency } from "../utils";

type InputBoxProps = {
  label: string;
  currencyOptions: string[];
  placeholderText: string;
  selectedCurrency: string;
  amount: number;
  onCurrencyChange?: (currency: string) => void;
  onAmountChange?: (amount: number) => void;
  currencyDisable?: boolean;
  amountDisable?: boolean;
};

export default function InputBox({
  label,
  placeholderText,
  selectedCurrency = "usd",
  amount,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
}: InputBoxProps) {
  const inputBoxId = useId();

  return (
    <div className="bg-white px-3 py-5 rounded-lg text-gray-800 flex flex-wrap items-center justify-between">
      <label htmlFor={inputBoxId} className="text-gray-500">{label}</label>
      <select
        id={inputBoxId}
        className="bg-gray-300 p-2 rounded outline-none"
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {uppercaseCurrency(currency)}
          </option>
        ))}
      </select>
      <input
      id={inputBoxId}
        type="number"
        className="bg-gray-300 py-1.5 px-3 rounded outline-none"
        placeholder={placeholderText}
        value={amount === 0 ? "" : amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        disabled={amountDisable}
      />
    </div>
  );
}
