import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";


const SearchBox = () => {
  const [City, setCity] = useState("Madhya Pradesh");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getWeatherInfo(cityName) {
    setLoading(true);
    try {
      let response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      setWeatherData({
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        weather: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
        windSpeed: jsonResponse.wind.speed,
        icon: jsonResponse.weather[0].icon,  
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeatherInfo(City);
  }

  useEffect(() => {
    getWeatherInfo("Madhya Pradesh");  
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-7 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-white mb-5">🌤 Weather Rhd</h1>
      <form
        className="flex flex-col items-center gap-3 bg-gray-800 p-6 rounded-lg shadow-lg w-[350px]"
        onSubmit={handleSubmit}
      >
        <TextField
          id="city"
          label="Enter City Name"
          variant="outlined"
          fullWidth
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            fieldset: { borderColor: "white" },
          }}
          required
          value={City}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          fullWidth
        >
          Get Weather
        </Button>
      </form>

      {loading ? (
        <CircularProgress color="inherit" className="mt-5" />
      ) : (
        weatherData && <WeatherCard {...weatherData} />
      )}
    </div>
  );
};

export default SearchBox;
