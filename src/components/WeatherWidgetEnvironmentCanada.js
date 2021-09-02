import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const weatherUrl = 'https://weather.gc.ca/rss/city/ab-39_e.xml';

const WeatherWidget = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('=== HERE 0')
    setLoading(true);

    // axios.get('https://schacreslake.com/.netlify/functions/weather').then(response => {
    //   console.log('=== HERE 1');
    //   console.log(response);
    // });

    // fetch(weatherUrl)
    //   .then((response) => response.text())
    //   .then((xml) => {
    //     setLoading(false);

    //     console.log('=== HERE 1')
    //     console.log(xml);

    //     setWeatherData({
    //       current: json.data.timelines[0].intervals[0].values,
    //       daily: json.data.timelines[1].intervals.slice(0, 9).map(day => ({
    //         startTime: day.startTime,
    //         ...day.values,
    //       }))
    //     });
    //   });
  }, []);
 
  const { current, daily } = weatherData;

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ color: 'white' }}>Fetch rate limit reached for weather data source...</div>
    )
  }

  if (current && daily) {
    return (
      <div>temp</div>

      // <div>

      //   <h4>Current:</h4>
      //   <div className="weather-current">
      //     <div className="card">
      //       <div className="card-content">
      //         <div><b>Temp:</b> {Math.round(current.temperatureMax)}°C</div>
      //         <div><b>Feels Like:</b> {Math.round(current.temperatureApparent)}°C</div>
      //         <div><b>Humidity:</b> {Math.round(current.humidity)}%</div>
      //         <div><b>Wind:</b> {degToCompass(current.windDirection)} {Math.round(current.windSpeed * 10) / 10}km/h (Gusts of {Math.round(current.windGust * 10) / 10}km/h)</div>
      //         <div><b>Cloud Cover:</b> {current.cloudCover}%</div>
      //       </div>
      //     </div>
      //   </div>

      //   <br />

      //   <h4>Daily:</h4>
      //   <div className="columns is-multiline">
      //     {daily.map((day, index) => {
      //       const date = new Date(day.startTime);
      //       return (
      //         <div key={index} className="column is-one-third">
      //           <div className="card">
      //             <div className="card-content">
      //               <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
      //                 <b>{dayjs(date.toUTCString()).format('ddd, MMM DD')}</b>
      //               </div>
      //               <div>{Math.round(day.temperatureMax)}°C ↑ ({Math.round(day.temperatureMin)}°C ↓)</div>
      //               <div>
      //                 <b>POP:</b>
      //                 <span> </span>
      //                 <span>{Math.round(day.precipitationProbability)}%</span>
      //                 <span> </span>
      //                 {precipitationTypes[day.precipitationType]
      //                   ? <span>({precipitationTypes[day.precipitationType]})</span>
      //                   : null
      //                 }
      //                 <span> </span>
      //                 <span>({Math.round(day.precipitationIntensity * 10) / 10}mm/hr)</span>
      //               </div>
      //               <div><b>Humidity:</b> {`${Math.round(day.humidity)}%`}</div>
      //               <div><b>Wind:</b> {degToCompass(day.windDirection)} {Math.round(day.windSpeed * 10) / 10}km/h (Gusts of {Math.round(day.windGust * 10) / 10}km/h)</div>
      //               <div><b>Cloud Cover:</b> {Math.round(day.cloudCover)}%</div>
      //             </div>
      //           </div>
      //         </div>
      //       );
      //     })}
      //   </div>

      // </div>
    );
  }

  return null;
};

export default WeatherWidget;
