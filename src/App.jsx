import React from 'react';
import './App.css';
import { useContent } from './Hook/useContent';
import { Form } from './Components/Form/Form';

function App() {
  const state = useContent();

  return (
    <div className="container">
      <div className="wrapper">
        <Form />
      </div>
    </div>
  );
}

export default App;
