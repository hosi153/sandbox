import { useFilteredUsers } from "./useFilteredUsers";

export default function UserList() {
  const youngUsers = useFilteredUsers();

  return (
    <ul>
      {youngUsers.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} 세
        </li>
      ))}
    </ul>
  );
}
