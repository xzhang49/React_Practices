import React, { useState, useRef } from 'react';
import FormInput from './components/FormInput';

import "./app.css";

function App() {
  // const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = 
  }

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="Sth else"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
