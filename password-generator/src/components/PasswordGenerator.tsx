import { useCallback, useEffect, useRef, useState } from "react";

import PasswordInput from "./PasswordInput";
import Header from "./Header";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../constants";


export default function PasswordGenerator() {
  const [length, setLength] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordCopied, setIsPasswordCopied] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const generatePassword = useCallback(() => {
    setIsPasswordCopied(false);
    let generatedPass = "";

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?/`~";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      generatedPass += characters.charAt(charIndex);
    }
    setPassword(generatedPass);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setIsPasswordCopied(true);
  };

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <div className="h-[70%] w-[30%] rounded-lg">
        <Header />
        <PasswordInput password={password} passwordRef={passwordRef} />
        <div className="p-6 bg-gray-800 rounded flex flex-col gap-4 text-xl">
          <div>
            <div className="flex items-center justify-between">
              <p>Password Length</p>
              <span>({length})</span>
            </div>
            <input
              type="range"
              name=""
              id=""
              max={MAX_PASSWORD_LENGTH}
              min={MIN_PASSWORD_LENGTH}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => setIncludeNumbers((prevState) => !prevState)}
              color="text-yellow-400"
            />
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              onChange={() => setIncludeSymbols((prevState) => !prevState)}
            />
            <label htmlFor="includeSymbols">Include Symbols</label>
          </div>
          <button
            onClick={copyPassword}
            className={`rounded px-4 py-2 bg-blue-600 w-full ${
              !isPasswordCopied && "hover:bg-blue-700"
            }`}
          >
            {isPasswordCopied ? "Copied successfully!" : "Copy Password"}
          </button>
        </div>
      </div>
    </div>
  );
}
