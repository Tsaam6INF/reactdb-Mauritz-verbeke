import React, { useState, useEffect } from "react";
import Login from "./components/Login";

function App() {
  const [users, setUsers] = useState([]); // Voeg deze regel toe

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)) // Hier zetten we de opgehaalde data in de state
      .catch((error) =>
        console.error("Fout bij ophalen van gebruikers:", error)
      );
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (data) => {
    setName(data);
  };

  const updatePassword = (data) => {
    setPassword(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${name}, Password: ${password}`);
  };

  return (
    <>
      <Login
        updateName={updateName}
        updatePassword={updatePassword}
        handleSubmit={handleSubmit}
      />
      <h2>Gebruikers:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
