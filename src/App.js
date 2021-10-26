import React, { useState, useEffect } from 'react';
import Form from './Form';
import WeatherData from './WeatherData';
import {WeatherCover} from './WeatherCover';


function App() {
  const [weatherData, setWeatherData] = useState({});
  const [form, setForm] = useState({city: '', country: ''});
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


  useEffect(() => {
    setIsDisabled(true)
    if(form.city) setIsDisabled(false)
  }, [form.city])


  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const setAPIData = async ({ city, country }) => {
    try {
      const API = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      const data = await API.json();

      if (data.cod ===  "404") throw Error(data.message);

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
            <section className='col-12 col-lg-5  title-container'>
              <WeatherCover />
            </section>
            <section className='col-12 col-lg-7 form-container'>
              <Form onSubmit={ handleSubmit } isDisabled={ isDisabled } form={ form } handleChange={ handleChange}/>
              <WeatherData data={weatherData} error={error} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
