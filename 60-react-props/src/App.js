import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";

const CONTACTS = "http://localhost:3000/contacts";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email.
 * Inside UserCard add class "card" to wrapper.
 *
 * NOTE: DB url - http://localhost:3000/contacts
 */

const getUsers = async () => {
  const response = await fetch(CONTACTS);
  const json = await response.json();
  return json;
};

const App = () => {
  const [users, setUsers] = useState([]);

  if (users.length === 0) getUsers().then((users) => setUsers(users));

  return users.map((user) => <UserCard user={user} />);
};

export default App;
