import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appts, contacts, addNewAppt}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentName, setCurrentName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addNewAppt(
      {name: currentName, contact: contact, date: date, time: time}
    )
    setCurrentName('');
    setContact('');
    setDate('');
    setTime('');
  };
  console.log(contacts);
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} currentName={currentName} setCurrentName={setCurrentName} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList props={appts} />
      </section>
    </div>
  );
};