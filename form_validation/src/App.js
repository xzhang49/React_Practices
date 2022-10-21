import React, { useState } from 'react';
import FormInput from './components/FormInput';

import "./app.css";

function App() {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="fullname" placeholder="Full Name"/>
        <FormInput name="sth" placeholder="Sth else"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
