import React, { useState } from "react";
import User from "./User";

// export default App;
/**
 * Create a user List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 *
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

function App() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    const user = json.results[0];
    return user;
  };

  const newUser = async () => {
    const user = await getUser();
    setUsers([...users, user]);
  };

  const deleteUser = (user) => setUsers(users.filter((u) => u !== user));

  return (
    <div>
      <button className="newUser" onClick={newUser}>
        New user
      </button>
      <ul>
        {users.map((user) => [
          User(user),
          <button onClick={() => deleteUser(user)}>Remove</button>,
        ])}
      </ul>
    </div>
  );
}

export default App;
