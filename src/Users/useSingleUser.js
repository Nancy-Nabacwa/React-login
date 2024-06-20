function SingleUser({ user }) {
    return (
      <div>
        <h3>Name:{`${user.firstName} ${user.lastName}`}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Address: {user.address}</p>
      </div>
    );
  }
  
  export default SingleUser;
  
  