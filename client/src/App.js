import { useEffect, useState } from "react";
import User from "./User";
import Login from "./Login";

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
      <Login setUser={setUser}></Login>
    </>
  );
}

export default App;
