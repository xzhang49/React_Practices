import React, { useState } from "react";
import './App.css';

function App() {
  const [weather, setWeather] = useState();
  const [lat, setlat] = useState(-15.875);
  const [lon, setlon] = useState(-47.75);

  let map = { 0: "Clear sky",
             1: "Mainly clear, partly cloudy, and overcast",
             2: "Mainly clear, partly cloudy, and overcast",
             3: "Mainly clear, partly cloudy, and overcast",
             45: "Fog and depositing rime fog",
             48: "Fog and depositing rime fog",
             51: "Drizzle: Light, moderate, and dense intensity",
             53: "Drizzle: Light, moderate, and dense intensity",
             55: "Drizzle: Light, moderate, and dense intensity",
             56: "DFreezing Drizzle: Light and dense intensity",
             57: "DFreezing Drizzle: Light and dense intensity",
             61: "Rain: Slight, moderate and heavy intensity",
             63: "Rain: Slight, moderate and heavy intensity",
             65: "Rain: Slight, moderate and heavy intensity",
             66: "Freezing Rain: Light and heavy intensity",
             67: "Freezing Rain: Light and heavy intensity",
             71: "Snow fall: Slight, moderate, and heavy intensity",
             73: "Snow fall: Slight, moderate, and heavy intensity",
             75: "Snow fall: Slight, moderate, and heavy intensity",
             77: "Snow grains",
             80: "Rain showers: Slight, moderate, and violent",
             81: "Rain showers: Slight, moderate, and violent",
             82: "Rain showers: Slight, moderate, and violent",
             85: "Snow showers slight and heavy",
             86: "Snow showers slight and heavy",
             95: "Thunderstorm: Slight or moderate",
             96: "Thunderstorm with slight and heavy hail",
             99: "Thunderstorm with slight and heavy hail"
            }

  const getWeather = (lat, lon) => {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode&timezone=auto`;

    fetch(url)
        .then(res => res.json())
        .then(result => {
          setWeather(result.daily.weathercode);
          // console.log(weather);
        });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setlat(e.target.elements.lat.value.trim());
    setlon(e.target.elements.lon.value.trim());
    // console.log(lat);
    // console.log(lon);

    getWeather(lat, lon);
  };

  return (
    <div className="App">
      <h1>React Weather App</h1>
      <form onSubmit={onSubmitHandler} className="search-form">
        <div>
          <label>Latitude: </label>
          <input
            name="lat"
            type="text"
          />
        </div>
        <div>
          <label>Longitude: </label>
          <input
            name="lon"
            type="text"
          />
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
      <div className="search-data">
          {weather && (<div>
            {map[weather[0]]}
          </div>)}
      </div>

    </div>
  );
}

export default App;
