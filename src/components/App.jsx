import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.key}
      id={contact.key}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://media-exp1.licdn.com/dms/image/C4E03AQHwfW5iNOiFhg/profile-displayphoto-shrink_400_400/0?e=1610582400&v=beta&t=p93WlbaV2kF23PNIAUayuY505LMXQahX8My93wh7uv0" />

      {contacts.map(createCard)}

      {/* <Card contact={contacts[0]} />
      <Card contact={contacts[1]} />
      <Card contact={contacts[2]} /> */}
    </div>
  );
}

export default App;
