import React, { useState } from 'react';

function App() {
  const [cityName, setCityName] = useState('');
  const [cities, setCities] = useState([]);

  const cityNameHandler = (e) => setCityName(e.target.value);

  const citiesHandler = () => setCities([...cities, cityName]);

  return (
    <div className="App">
      <input onChange={cityNameHandler} value={cityName} />
      <div>
        <button onClick={citiesHandler}>add city</button>
      </div>
      {cities.map(city => (
        <div>{city}</div>
      ))}

      <h1>Hello StackBlitz</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default App;
