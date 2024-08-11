import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <div className="h-[70%] w-[30%] rounded-lg">
        <h1 className="text-3xl text-center mb-4">Password Generator</h1>
        <input
          type="text"
          value={password}
          className="w-[100%] bg-gray-800 mb-4 p-2 rounded"
          placeholder="password"
        />
        <div className="p-4 bg-gray-800 rounded">
          <span>Settings</span>
          <div>
            <div className="flex items-center justify-between">
              <p>Password Length</p>
              <span className="text-yellow-400 text-xl">{length}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="includeSymbols">Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}
