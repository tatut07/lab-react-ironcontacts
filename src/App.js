import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  contactsJSON = contactsJSON.slice(5);

  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contactsJSON.length);
    let randomContact = contactsJSON[randomIndex];
    setContacts([...contacts, randomContact]);
    contactsJSON.splice(randomIndex, 1);
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
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
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
      <div className="Table">
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
              <th>
                <h3>Actions</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt="contact"
                      className="photo"
                    />
                  </td>
                  <td>
                    <p>{contact.name}</p>
                  </td>
                  <td>
                    <p>{contact.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <p>{contact.wonOscar === true && "🏆"}</p>
                  </td>
                  <td>
                    <p>{contact.wonEmmy === true && "🏆"} </p>
                  </td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
