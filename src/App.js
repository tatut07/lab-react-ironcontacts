import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [newContact, setNewContact] = useState(contactsJSON.slice(5, 6));

  // Add random contact
  const addRandomContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact(
      contactsJSON[Math.floor(Math.random() * contactsJSON.length)]
    );
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContactsP = [...contacts].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContactsP);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contactsJSON) => {
      return contactsJSON.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Popularity</h3>
            </th>
            <th>
              <h3>wonOscar</h3>
            </th>
            <th>
              <h3>wonEmmy</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactsJSON) => {
            return (
              <tr key={contactsJSON.id}>
                <td>
                  <img src={contactsJSON.pictureUrl} alt="contact" />
                </td>
                <td>
                  <p>{contactsJSON.name}</p>
                </td>
                <td>
                  <p>{contactsJSON.popularity}</p>
                </td>
                {contactsJSON.wonOscar === true && <td>🏆</td>}
                {contactsJSON.wonEmmy === true && <td>🏆</td>}
                <td>
                  <button onClick={() => deleteContact(contactsJSON.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
