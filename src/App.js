import "./App.css";
import contactsJSON from "./contacts.json";
// import { useState } from "react";

function App() {
  const fiveContacts = contactsJSON.slice(0, 5);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <h3>Name</h3>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <h3>Popularity</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contactsJSON) => {
            return (
              <tr>
                <td>
                  <img src={contactsJSON.pictureUrl} />
                </td>
                <td>
                  <p>{contactsJSON.name}</p>
                </td>
                <td>
                  <p>{contactsJSON.popularity}</p>
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
