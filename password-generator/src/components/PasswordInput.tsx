type PasswordInputProps = {
  password: string;
  passwordRef: React.RefObject<HTMLInputElement>;
};

export default function PasswordInput({
  password,
  passwordRef,
}: PasswordInputProps) {
  return (
    <input
      type="text"
      value={password}
      className="w-[100%] bg-gray-800 mb-4 px-6 py-4 rounded focus:outline-none text-2xl"
      placeholder="password"
      readOnly
      ref={passwordRef}
    />
  );
}
