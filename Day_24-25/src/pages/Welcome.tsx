import { useState, useEffect } from "react"



type user ={
    name: string,
    email: string,
    password: string
}


const Welcome: React.FC = () => {

    const [user, setuser] = useState<user | null>(null);

    useEffect(() => {
        const loginuser = localStorage.getItem("Login User");
        if (loginuser) {
            setuser(JSON.parse(loginuser));
        }
    }, []);



    return(
        <div>
            <h1>User Pfofile</h1>
            <ul>
                <li>Name: {user?.name}</li>
                <li>Email: {user?.email}</li>
                <li>password: {user?.password}</li>
            </ul>
            
        </div>
    )
}

export default Welcome