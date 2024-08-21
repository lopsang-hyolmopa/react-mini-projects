type InputBoxProps = {
  label: string;
  currencyOptions: string[];
  placeholderText: string;
};

export default function InputBox({
  label,
  currencyOptions,
  placeholderText,
}: InputBoxProps) {
  return (
    <div className="bg-white px-3 py-5 rounded-lg text-gray-800 flex flex-wrap items-center justify-between">
      <label className="text-gray-500">{label}</label>
      <select name="" id="" className="bg-gray-300 p-2 rounded">
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="bg-gray-300 py-1.5 px-3 rounded"
        placeholder={placeholderText}
      />
    </div>
  );
}
