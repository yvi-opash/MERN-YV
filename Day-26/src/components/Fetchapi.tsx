// import { useEffect, useState } from "react";

import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

interface user{
    id:number;
    name:string;
    language:string;
    bio :string;
}

const UserList = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<user[]>([]);
  const [loadings, setLoadings] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoadings(false);
      return;
    }

    setLoadings(true); 
    
    const fetchUsers = async () => {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const res = await fetch(
          "https://microsoftedge.github.io/Demos/json-dummy-data/256KB-min.json"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: user[] = await res.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoadings(false);
      }
    };

    fetchUsers();
  }, [user]);
    

if (!user) return(<p>Please log in to view the user list.</p>)
if(loadings) return(<div> <LoadingOutlined    /></div>)
if(error) return(<p>Error:{error}</p>)

  return (
    <>
       <div>
      <h2>User List</h2>
       <ul>
         {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ---- {user.language} ------- {user.bio}  
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default UserList;