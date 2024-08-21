import Heading from "./Heading";
import Form from "./Form";
import { imageURL } from "../constants";

export default function CurrencyConverter() {
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-center bg-cover text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageURL})`,
      }}
    >
      <div className="w-full max-w-md rounded-lg p-6 border border-gray-50 backdrop-blur-sm bg-black/20">
        <Heading />
        <Form />
      </div>
    </div>
  );
}
