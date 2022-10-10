import React, { useState, useRef } from 'react';

function PhoneBookForm({ addToPhoneBook }) {
  const userFirstName = useRef(null);
  const userLastName = useRef(null);
  const userPhone = useRef(null);

  const formSubmitHandler = () => {

  };

  return (
    <form>
      <label>First Name:</label>
      <br />
      <input />
      <br />
      <label>Last Name:</label>
      <br />
      <input />
      <br />
      <label>Phone:</label>
      <br />
      <input />
      <br />
      <button>Add User</button>
    </form>
  );
}

function App() {
  //Add City
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);

  const cityNameHandler = (e) => {setCityName(e.target.value)};
  const citiesHandler = () => {setCities([...cities, cityName])};
 
  //Phone Book
  const [phoneBook, setPhoneBook] = useState([
    {
      userFirstName: 'testFirstName1',
      userLastName: 'testLastName1',
      userPhone: 'testPhone1'
    },
    {
      userFirstName: 'testFirstName2',
      userLastName: 'testLastName2',
      userPhone: 'testPhone2'
    }
  ]);

  const phoneBookHanlder = (data) => {
    let temp = phoneBook;
    console.log(temp);
    setPhoneBook([...phoneBook, data]);
  };

  return (
    <div>
      <input value={cityName} onChange={cityNameHandler} />
      <div>
        <button onClick={citiesHandler}>add city</button>
      </div>
      {cities.map(city => (
        <div>{city}</div>
      ))}

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <section>
        <PhoneBookForm addToPhoneBook= {phoneBookHanlder} />
      </section>
    </div>
    
  );
}

export default App;
