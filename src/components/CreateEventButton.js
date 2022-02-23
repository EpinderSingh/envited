import React from 'react';
import { useNavigate } from 'react-router-dom';

import createEvent from '../images/CreateEventButton.png';
import './CreateEventButton.css';

const CreateEventButton = () => {
  let navigate = useNavigate();

  return (
    <img
      onClick={() => {
        navigate('/create');
      }}
      className='createEventButton'
      src={createEvent}
      alt='Create Event Button'
    />
  );
};

export default CreateEventButton;
