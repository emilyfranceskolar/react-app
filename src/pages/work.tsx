import { useState } from "react";
import getWeatherByInput from "../data/weather-api";
import "./work.css";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
};

export default function WorkPage() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");

  return (
    <>
      <h3 className="work-title">
        Example of a web-api call to
        <span className="api-name"> openweathermap.org</span>
      </h3>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value.toLowerCase())}
            onKeyDown={async (e) => {
              const result = await getWeatherByInput(e, location);
              if (result) {
                setData(result);
              }
            }}
            placeholder="Enter a city"
          />
        </div>
        <div className="search-top">
          <div className="location">
            <p>{data ? data.name : "City Name"}</p>
            <div className="temp">
              <p> {data ? `${Math.round(data.main.temp)}` : "0"}°C</p>
            </div>
            <div className="description">
              {data ? data.weather[0].description : "weather description"}
            </div>
          </div>
        </div>
        <div className="search-bottom">
          <div className="feels-like">
            <p>Feels like</p>
            <p>{data ? Math.round(data.main.feels_like) : "0"} °C</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p>{data ? data.main.humidity : "0"} %</p>
          </div>
          <div className="wind">
            <p>Wind</p>
            <p>{data ? data.wind.speed : "0"} m/s</p>
          </div>
        </div>
      </div>
    </>
  );
}
