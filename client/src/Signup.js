import { useState } from "react";

function Signup({ setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");

  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(bio);
  console.log(email);
  console.log(username);
  console.log(password);
  console.log(passwordConfirmation);
  console.log(profilePic);

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username: username,
        password,
        password_confirmation: passwordConfirmation,
        age,
        img_url: profilePic,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((data) => console.log(data.errors));
      }
    });
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Profile Image URL"
          onChange={(e) => setProfilePic(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Bio"
          onChange={(e) => setBio(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Signup;
