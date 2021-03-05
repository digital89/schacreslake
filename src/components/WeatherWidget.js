import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';

const lat = 52.480818160508875;
const lon = -113.76193404392085;
const exclude = "minutely,alerts";
const units = "metric";
const appId = "c82ea2d0a69af0208825c7c72f7de1ea";
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${appId}`;

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  }, []);

  /*
  clouds: 63
  dew_point: -33.05
  dt: 1612760400
  feels_like: -34.9
  humidity: 76
  pop: 0
  pressure: 1037
  temp: -30.45
  uvi: 0
  visibility: 10000
  weather: [Object] (1)
  wind_deg: 241
  wind_speed: 0.81
  */

  return (
    <>
      {weatherData ? (
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
              {weatherData.hourly.map((hourly) => {
                const date = new Date(hourly.dt * 1000);
                return (
                  <tr>
                    <td>{dayjs(date.toUTCString()).format('ddd, MMM DD, h:mma')}</td>
                    <td>{Math.round(hourly.temp)}</td>
                    <td>{Math.round(hourly.feels_like)}</td>
                    <td>{`${Math.round(hourly.pop * 100)}%`}</td>
                    <td>{`${hourly.humidity}%`}</td>
                    <td>{hourly.wind_speed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default WeatherWidget;
