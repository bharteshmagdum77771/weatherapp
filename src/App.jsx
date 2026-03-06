import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/weatherCard";

const API_KEY = "18513fd542ee2a68322c7ff34958996f"; 

const App = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {

    if (!city) return;                 // Do nothing if input is empty

    try {

      setLoading(true);                 // Show "loading" message

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);               // Save the fetched weather data

    } catch (error) {
      alert("City not found");
    } finally {
      setLoading(false);                   // Hide "loading" message regardless of success or failure
    }

  };

  return (

    <div className="container text-center mt-5">

      <h1 className="mb-4">Weather App</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">

          <div className="input-group mb-4">

            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}           // onChange updates city state as the user types.
              onKeyDown={(e) => {                                 //onKeyDown if user presses Enter, it runs getWeather()
                if (e.key === "Enter") {
                  getWeather();
                }
              }}
            />

            <button
              className="btn btn-primary"
              onClick={getWeather}
            >
              Search
            </button>

          </div>

        </div>
      </div>

      {loading && <p className="text-white">Loading weather...</p>}          {/*Shows this text only when loading is true */}

      {weather && (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <WeatherCard weather={weather} />           {/* Shows the WeatherCard component only if weather data exists.

                                                            WeatherCard component gets weather info from weather prop.*/}
          </div>
        </div>
      )}

    </div>

  );
}

export default App;
// It allows users to input a city name and fetches the current weather data for that city using the OpenWeatherMap API. 
// The component manages state for the city input, weather data, and loading status. 
// It also has error handling for cases where the city is not found. 
// The weather data is displayed using a separate `WeatherCard` component.


//Uses axios.get() to ask OpenWeatherMap for weather of the typed city.
//await → waits until the data comes back.
//try/catch/finally → handles errors and loading state safely.