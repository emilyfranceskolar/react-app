import "./work.css";

export default function WorkPage() {
  //openWeather
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c44c3f2fcab621d682e1d711bdcf2022`;

  return (
    <>
      <h3 className="work-title">
        Example of a web-api call to
        <span className="api-name"> openweathermap.org</span>
      </h3>
      <div className="search-container">
        <div className="search-top">
          <div className="location">
            <p>Göteborg</p>
            <div className="temp">7°c</div>
            <div className="description">Cloudy</div>
          </div>
        </div>
        <div className="search-bottom">
          <div className="feels-like">
            <p>Feels like: 7 °C</p>
          </div>
          <div className="humidity">
            <p>Humidity: Some %</p>
          </div>
          <div className="wind">
            <p>Wind: 12mph</p>
          </div>
        </div>
      </div>
    </>
  );
}
