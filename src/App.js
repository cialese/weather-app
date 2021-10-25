import React, { useState } from 'react';
import Form from './Form';
import WeatherData from './WeatherData';
import {WeatherCover} from './WeatherCover';


function App() {
  const [weatherData, setWeatherData] = useState({})
  const [error, setError] = useState('')

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  const setAPIData = async ({ city, country }) => {
    try {
      const API = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await API.json();

      if (!(city && country)) throw Error('Complete all fields');
      if (data.code ===  400) throw Error(data.message);

      const { main, name, sys, wind, weather } = data;
      setWeatherData({
        temperature: main.temp,
        city: name,
        country: sys.country,
        humidity: main.humidity,
        wind: wind.speed,
        condition: weather[0].description,
        conditionIcon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      });
      setError('');
    } catch (err) {
      setWeatherData({});
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { target: { elements } } = e;
    const city = elements.city.value;
    const country = elements.country.value;

    await setAPIData({ city, country })
  };

  return (
    <div className='wrapper'>
      <div className='main'>
        <div className='container card-wrapper'>
          <div className='row'>
            <section className='col-5 col-xs-12 title-container'>
              <WeatherCover />
            </section>
            <section className='col-7 col-xs-12 form-container'>
              <Form onSubmit={handleSubmit} />
              <WeatherData data={weatherData} error={error} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
