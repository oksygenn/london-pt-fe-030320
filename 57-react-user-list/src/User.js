import React from "react";

const User = (user) => {
  return (
    <li key={user.login.uuid}>
      {user.name.first} {user.name.last}
    </li>
  );
};

export default User;
// console.log(User(user));
