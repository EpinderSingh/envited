import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UI from './UI/Ui';
import CreateEvent from './createEvent/CreateEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UI />} />
        <Route path='/create' element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
