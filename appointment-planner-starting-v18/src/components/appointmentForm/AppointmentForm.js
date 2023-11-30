import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentName,
  setCurrentName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  console.log(contacts);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="currentName">Title:</label>
      <input type="text" name="currentName" id="currentName" onChange={e => setCurrentName(e.target.value)} value={currentName} />
      <ContactPicker contacts={contacts} onChange={e => setContact(e.target.value)} name={contact} value={contact} />
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" id="date" onChange={e => setDate(e.target.value)} value={date} min={getTodayString()}/>
      <label htmlFor="time">Time:</label>
      <input type="time" name="time" id="time" onChange={e => setTime(e.target.value)} value={time} />
      <input type="submit" />
    </form>
  );
};
