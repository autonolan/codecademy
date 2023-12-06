import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addNewContact({
        name: name,
        phone: phone,
        email: email
      });
    };
    setName('');
    setPhone('');
    setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setIsDuplicate(contacts.some(contact => {
      return contact.name === name;
    }));
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList props={contacts}/>
      </section>
    </div>
  );
};
