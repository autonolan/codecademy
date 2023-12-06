import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name" >Name:</label>
      <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name}/>
      <label for="phone">Phone:</label>
      <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={e => setPhone(e.target.value)} value={phone}/>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
      <input type="submit" />
    </form>
  );
};

