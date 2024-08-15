import { imageURL } from "../constants";
import Heading from "./Heading";

export default function CurrencyConverter() {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-center bg-cover text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageURL})`,
      }}
    >
      <div className="w-full max-w-md rounded-lg p-4 border border-gray-50 backdrop-blur-sm bg-black/20">
        <Heading />
        <form action="">
          <button
            type="submit"
            className="w-full bg-orange-600 rounded p-3 text-xl hover:bg-orange-500"
          >
            Convert{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
