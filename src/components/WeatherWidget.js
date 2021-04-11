import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';

const lat = 52.480818160508875;
const lon = -113.76193404392085;
const exclude = "minutely,alerts";
const units = "metric";
const appId = "c82ea2d0a69af0208825c7c72f7de1ea";
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${appId}`;

const degToCompass = (deg) => {
  var val = Math.floor((deg / 22.5) + 0.5);
  var dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return dirs[(val % 16)];
}

const capitalizeFirstLetters = (sentence) => {
  return sentence.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);
 
  const { current, hourly } = weatherData;

  if (current && hourly) {
    return (
      <>

        <h4>Current:</h4>
        <div className="weather-current">
          {current.weather && current.weather[0] && current.weather[0].description
            ? <div>{capitalizeFirstLetters(current.weather[0].description)}</div>
            : null
          }
          <div>{current.temp}°C</div>
          <div>Feels Like: {current.feels_like}°C</div>
          <div>Humidity: {current.humidity}%</div>
          <div>Wind: {degToCompass(current.wind_deg)} {current.wind_speed}km/h</div>
        </div>

        <br />

        <h4>Hourly:</h4>
        <div className="table-container">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Time</th>
                <th>°C</th>
                <th>Feels Like (°C)</th>
                <th>POP</th>
                <th>Humidity</th>
                <th>Wind (km/h)</th>
              </tr>
            </thead>
            <tbody>
              {hourly.map((hourly) => {
                const date = new Date(hourly.dt * 1000);
                return (
                  <tr>
                    <td>{dayjs(date.toUTCString()).format('ddd, MMM DD, h:mma')}</td>
                    <td>{Math.round(hourly.temp)}</td>
                    <td>{Math.round(hourly.feels_like)}</td>
                    <td>{`${Math.round(hourly.pop * 100)}%`}</td>
                    <td>{`${hourly.humidity}%`}</td>
                    <td>{degToCompass(current.wind_deg)} {hourly.wind_speed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </>
    );
  }

  return (
    <div>Loading...</div>
  );
};

export default WeatherWidget;
