import React, { useState, useRef } from 'react';

const style = {
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px, 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    },
  }
}

function PhoneBookForm({ addToPhoneBook }) {
  const userFirstName = useRef(null);
  const userLastName = useRef(null);
  const userPhone = useRef(null);

  const formSubmitHandler = () => {

  };

  return (
    <form style={style.form.container}>
      <label>First Name:</label>
      <br />
      <input 
        style={style.form.inputs}
        type="text" 
      />
      <br />
      <label>Last Name:</label>
      <br />
      <input
        style={style.form.inputs}
        type="text"  
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        type="text"  
      />
      <br />
      <input 
        style={style.form.submitBtn} 
        type="submit" 
      />
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
