import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/test").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        return r.json().then((user) => console.log(user.error));
      }
    });
  }, []);

  return <User user={user} />;
}

export default App;
