import React from "react";

function Form() {
  return (
    <form action="#">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
