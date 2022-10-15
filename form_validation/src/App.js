import React from 'react';
import FormInput from './components/FormInput';

import "./app.css";

function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="Sth else"/>
      </form>
    </div>
  );
}

export default App;
