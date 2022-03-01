function User({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h1>Username: {user.username}</h1>
          <h2>First Name: {user.first_name}</h2>
          <h2>Last Name: {user.last_name}</h2>
          <h2>Age: {user.age}</h2>
          <h2>Email: {user.email}</h2>
          <img src={user.img_url}></img>
          <p>Bio: {user.bio}</p>
          <p>password_digest:{user.password_digest}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default User;
