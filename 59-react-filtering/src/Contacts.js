import React, { useState, useEffect } from "react";

const CONTACTS_URL = "http://localhost:3000/contacts";

const Contacts = () => {
  const [contacts, setContact] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState("");

  if (contacts.length === 0) {
    fetch(CONTACTS_URL)
      .then((res) => res.json())
      .then((res) => setContact(res));
  }

  const contactsToRender =
    selectedContacts === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().match(selectedContacts.toLowerCase())
        );

  const handleChange = (event) => {
    setSelectedContacts(event.target.value);
  };

  return (
    <div>
      <div className="App">
        <input
          type="text"
          placeholder="Start typing name here..."
          onChange={handleChange}
        />
      </div>

      <ul>
        {contactsToRender.map((contact) => (
          <li>
            <p>{contact.name}</p>
            <p className="company">{contact.company}</p>
            <p>{contact.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
