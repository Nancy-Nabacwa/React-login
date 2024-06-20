function SingleUser({ user }) {
    return (
      <div >
        <img src={user.image} alt={`${user.firstName} profile`}/>
        <h2>{user.firstName} {user.lastName}</h2>
        
      {/* <p>Email: {user.email}</p> */}
      {/* <p>Age: {user.age}</p> */}
      {/* <p>Gender: {user.gender}</p>
      <p>Address: {user.address.address}, {user.address.city}, {user.address.postalCode}, {user.address.country}</p> */}
      </div>
    );
  }
  
  export default SingleUser;
  
  