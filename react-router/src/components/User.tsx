import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="p-4 text-center">
      <h1>User Id: {userId}</h1>
    </div>
  );
}
