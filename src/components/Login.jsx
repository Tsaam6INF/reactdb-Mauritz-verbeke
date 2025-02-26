import React from "react";

export default function Login({ updateName, updatePassword, handleSubmit }) {
  const handleNameChange = (event) => {
    updateName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    updatePassword(event.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleNameChange} />
        </label>
        <label>
          Pasword:
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
