import FaqList from "./components/FaqList";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="py-8 px-6 lg:py-20 lg:px-48 bg-black text-white min-h-screen min-w-[320px] lg:min-w-screen">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <FaqList />
      </div>
    </div>
  );
}

export default App;
