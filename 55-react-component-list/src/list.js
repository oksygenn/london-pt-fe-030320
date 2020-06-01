import React from "react";

function createList(array) {
  return (
    <ul>
      {array.map((element) => {
        return <li key={element}>{element}</li>;
      })}
    </ul>
  );
}

export default createList;
