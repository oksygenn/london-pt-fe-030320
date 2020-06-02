import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
  });

  return (
    <form>
      <input type="text" className="firstName" />
      <input type="text" className="lastName" />
      <input type="number" className="age" />
      <input type="select" className="gender" />
    </form>
  );
};

export default UserForm;
/* 1. Create component UserForm.
 * 2. UserForm needs to have state {user} with properties:
 * 	- firstName, - lastName, - age, - gender.
 * 3. UserForm should contain 4 inputs:
 * - firstName(type: "text", class: firstName)
 * - lastName(type: "text", class: lastName)
 * - age(type: "number", class: age)
 * - gender(type="select" class: gender,)
 * 4. When the value of any input changes, user state needs to reflect that.
 * 5. On form submit post your user to database. Validate data.
 * If any value is missing, you shouldn't post user to database.
 * */
