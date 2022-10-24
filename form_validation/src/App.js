import React, { useState } from 'react';
import FormInput from './components/FormInput';

import "./app.css";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username"
    },
    {
      id: 2,
      email: "email",
      type: "text",
      placeholder: "Email",
      label: "Email"
    },
    {
      id: 3,
      name: "brithday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password"
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);

  return (
    <div className="app">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange} 
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
