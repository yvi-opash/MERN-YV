import useFetchAllData from "./hooks/useFetchAllUsers";


  interface User {
  id: number;
  title: string;
}


function App() {


const { data, loading, error } = useFetchAllData<User[]>(
  "https://jsonplaceholder.typicode.com/albums  "
);

  return (
    <>
    {loading && <div> Loading...</div>}
      {error && <div> Error: {error}</div>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      )}
    
    </>
  )
}

export default App
