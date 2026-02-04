import useFetchAllData from "./hooks/useFetchAllData"

interface User {
  id: number;
  name: string;
}




function App() {
  
 const { data, loading, error } = useFetchAllData<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;    
  
    return (
  <ul>
    {data?.map((elem,) => (
      <li key={elem.id}>{elem.name}</li>
    ))}
  </ul>
  )
}

export default App
