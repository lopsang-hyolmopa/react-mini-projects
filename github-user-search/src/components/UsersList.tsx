import { Users } from "../types";
import UserItem from "./UserItem";

interface UsersProps {
  users: Users[];
}

export default function UsersList({ users }: UsersProps) {
  return (
    <section className="p-6 md:px-32 md:py-16">
      {users.length > 0 && 
        <h2 className="text-xl mb-4">{`${users.length} users found`}</h2>
      }
      <div className="grid md:grid-cols-4 gap-4 md:gap-6">
        {users.map((user: Users) => {
          return (
            <UserItem
              key={user.id}
              imgUrl={user.avatar_url}
              profileUrl={user.html_url}
              userName={user.login}
            />
          );
        })}
      </div>
    </section>
  );
}
