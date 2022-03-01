import { useEffect, useState } from "react";
import User from "./User";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        return r.json().then((user) => console.log(user.error));
      }
    });
  }, []);

  return (
    <>
      <User user={user} />
      {!user ? (
        <Login setUser={setUser}></Login>
      ) : (
        <Logout setUser={setUser}></Logout>
      )}
    </>
  );
}

export default App;
