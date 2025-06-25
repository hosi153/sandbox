import { useEffect, useState } from "react";

const mockUsers = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "David", age: 42 },
];

export function useFilteredUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const youngUsers = users.filter((user) => user.age < 30);
  return youngUsers;
}
