import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className="py-10 text-3xl md:text-4xl flex items-center justify-center gap-4">
      <FaGithub />
      <h1 className="font-bold">Github User Finder</h1>
    </div>
  );
}
