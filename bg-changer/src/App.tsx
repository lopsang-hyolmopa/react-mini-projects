import { useState } from "react";

import { colors } from "./colors";

function App() {
  const [bgColor, setBgColor] = useState<string>("gray");

  return (
    <div
      className="h-screen flex flex-wrap justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed bottom-20 bg-white py-4 px-8 rounded-lg">
        <h1 className="text-center mb-6 text-4xl">Background Changer</h1>
        <div className="flex gap-4 flex-wrap">
          {colors.map((color) => {
            return (
              <button
                key={color.id}
                className="rounded-lg py-2 px-4 shadow-xl size-14"
                style={{ backgroundColor: color.code }}
                onClick={() => setBgColor(color.code)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
