const WeatherCard = ({ city, temp, weather, humidity, windSpeed, icon }) => {
    return (
      <div className="flex justify-center mt-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-[350px] text-center">
          <h1 className="text-3xl font-bold text-gray-800">{city}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={weather}
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold text-gray-600 capitalize">
            {weather}
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">
            🌡 {temp}°C
          </h3>
          <p className="text-gray-600 mt-2">💨 Wind Speed: {windSpeed} m/s</p>
          <p className="text-gray-600">💧 Humidity: {humidity}%</p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  