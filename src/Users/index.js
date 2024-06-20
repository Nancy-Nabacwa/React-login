import './index.css'
import { useGetUsers } from "./hooks/useGetUsers";
import SingleUser from "./useSingleUser";

const Users =()=>{
    const {users,error,loading} = useGetUsers();
    console.log({users})
    return (
        <div>
             {loading && <h2>Loading users ...</h2>}
                  
        <ul  className="user-list">
          {users.map((user, index) => (
            <li key={index}>
              <SingleUser user={user} />
            </li>
          ))}
        </ul>
      </div>
      );
}
export default Users;