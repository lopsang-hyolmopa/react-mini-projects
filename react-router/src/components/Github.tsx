import { useLoaderData } from "react-router-dom";

export default function Github() {
  const githubData = useLoaderData();
  return (
    <div className="min-h-[300px] mb-24">
      <h1 className="text-center py-8 text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
        Github Profile
      </h1>
      <div className="flex flex-col items-center text-center py-4 text-gray-500 text-xl">
        <img
          className="rounded-lg h-[200px] mb-4"
          src={githubData.avatar_url}
          alt="Github Profile"
        />
        <div>
          <p>
            Username:{" "}
            <a
              href={githubData.html_url}
              target="_blank"
              className="italic text-gray-700"
            >
              @{githubData.login}
            </a>
          </p>
          <p>
            Full Name: <span className="text-gray-700">{githubData.name}</span>
          </p>
          <p>
            Followers:{" "}
            <span className="text-gray-700">{githubData.followers}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const fetchGithubProfile = async () => {
  const apiRes = await fetch("https://api.github.com/users/lopsang-hyolmopa");
  return apiRes.json();
};
