import { useEffect, useState } from "react";

interface user{
    id:number;
    name:string;
    email:string;
}

const UserList = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [loadings, setLoadings] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        

        const data: user[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoadings(false);
      }
    };

    fetchUsers();
  }, []);
    

if(loadings) return(<p>loading................</p>)
if(error) return(<p>Error:{error}</p>)

  return (
    <>
       <div>
      <h2>User List</h2>
       <ul>
         {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>  {user.email}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default UserList;