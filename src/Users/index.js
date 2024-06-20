import { useGetUsers } from "./hooks/useGetUsers";
import SingleUser from "./useSingleUser";

const Users =()=>{
    const {users,error,loading} = useGetUsers();
    console.log({users})
    return (
        <div>
             {loading && <h2>Loading users ...</h2>}
                  
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <SingleUser user={user} />
            </li>
          ))}
        </ul>
      </div>
      );
}
export default Users;