
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
}
interface UserListProps {
  curuser: User;
}
const Userlist = (props : UserListProps) => {
    
    return(
             <li>
                <h2>Name : {props.curuser.name}</h2>
                <h3>Email : {props.curuser.email}</h3>
                <h3>Age : {props.curuser.age}</h3>
            </li>
           )

}

export default Userlist;