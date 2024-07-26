interface UserItemProps {
  imgUrl: string;
  profileUrl: string;
  userName: string;
}

export default function UserItem({
  imgUrl,
  profileUrl,
  userName,
}: UserItemProps) {
  return (
    <div className="p-4 bg-white text-black rounded-lg flex items-center">
      <img
        src={imgUrl}
        alt={`${userName}'s avatar`}
        className="size-12 rounded-full mr-4 shadow-lg"
      />
      <div>
        <p className="font-bold">{userName}</p>
        <a
          href={profileUrl}
          target="_blank"
          className="text-gray-500 text-sm font-light"
        >
          Visit profile
        </a>
      </div>
    </div>
  );
}
