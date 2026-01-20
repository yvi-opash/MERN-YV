
import { useState } from "react";
import userdata from "../userdata.json"
import Userlist from './Userlist'

const Fetchuser = () => {

    //const [user, setuser] =useState<>([])


return(
    <ul>
        {userdata.map((cur) => {
           
            return <Userlist key={cur.id} curuser = {cur}/>
           
        })}
        
        
    </ul>
    
);
  

}

export default Fetchuser