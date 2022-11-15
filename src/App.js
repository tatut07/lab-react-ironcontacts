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

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
