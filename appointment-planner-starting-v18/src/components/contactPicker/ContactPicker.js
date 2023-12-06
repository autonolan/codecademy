import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <select onChange={onChange} name={name} value={value}>
      <option value="">No contact selected...</option>
      {contacts.map(contact => {
        return <option value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
