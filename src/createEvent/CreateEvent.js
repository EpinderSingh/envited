import React, { useState } from 'react';

const CreateEvent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>First Name: </label>
      <input
        type='text'
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      <label>Last Name: </label>
      <input
        type='text'
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
    </form>
  );
};

export default CreateEvent;
