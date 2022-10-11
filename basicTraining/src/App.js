import React, { useState, useRef } from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      userFirstName: userFirstName.current.value,
      userLastName: userLastName.current.value,
      userPhone: userPhone.current.value
    }
    addToPhoneBook(data);
  };

  return (
    <form onSubmit={formSubmitHandler} style={style.form.container}>
      <label>First Name:</label>
      <br />
      <input 
        style={style.form.inputs}
        type="text"
        className="userFirstName"
        name="userFirstName"
        ref={userFirstName} 
      />
      <br />
      <label>Last Name:</label>
      <br />
      <input
        style={style.form.inputs}
        type="text"
        className="userLastName"
        name="userLastName"
        ref={userLastName}  
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        type="text"
        className="userPhone"
        name="userPhone"
        ref={userPhone}  
      />
      <br />
      <input 
        style={style.form.submitBtn} 
        type="submit"
        className="submitButton"
        value="Add User"
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First Name</th>
          <th style={style.tableCell}>Last Name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
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
        <InformationTable phoneBook={phoneBook} />
      </section>
    </div>
    
  );
}

export default App;
