type InputBoxProps = {
  label: string;
  currencyOptions: string[];
  placeholderText: string;
};

export default function InputBox({ label, currencyOptions, placeholderText }: InputBoxProps) {
  return (
    <div className="bg-white p-4 rounded-lg text-gray-800">
      <span className="text-gray-500">{label}</span>
      <div className="flex items-center justify-between">
        <select name="" id="" className="bg-gray-300 py-1.5 px-2 rounded">
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="bg-gray-300 py-1.5 px-2 rounded"
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
}
