import React, { useState } from "react";
import { postUser } from "../../fetch";
const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.firstName && user.lastName !== "") {
      postUser(user);
    }

    setUser({
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
    });
  };

  return (
    <div className="state">
      <form onSubmit={handleSubmit} className="userForm">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          className="firstName"
          name="firstName"
          value={user.firstName}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Surname"
          className="lastName"
          name="lastName"
          value={user.lastName}
          required
        />
        <input
          onChange={handleChange}
          type="number"
          min="0"
          max="111"
          className="age"
          name="age"
          value={parseInt(user.age)}
          required
        />
        <select
          onChange={handleChange}
          type="select"
          className="gender"
          name="gender"
          value={user.gender}
          required
        >
          <option>Please choose an option</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
