const WeatherCard = ({ weather }) => {                    //It receives prop 'weather' from its parent App.jsx

  const icon = weather.weather[0].icon;    //weather[0].icon gives the icon code for the current weather (like sunny, rainy, cloudy).

  return (

    <div className="card shadow weather-card">

      <div className="card-body text-center">

        <h2>{weather.name}</h2>
        <p>Country: {weather.sys.country}</p>

        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />

        <h3 className="temp">{weather.main.temp} °C</h3>

        <p className="text-capitalize">
          {weather.weather[0].description}
        </p>

        <hr />

        <p>Wind Speed: {weather.wind.speed} </p>

      </div>

    </div>

  );
  
};

export default WeatherCard;

// This component receives weather data as a prop and displays it in a card format. 
// It shows the city name, country, weather icon, temperature, description, and wind speed. 