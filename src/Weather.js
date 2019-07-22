import React from 'react';

const Weather = ({
  country,
  city,
  temperature,
  humidity,
  wind,
  description,
  error
}) => (
  <div className='weather__info'>
    {city && country && (
      <p className='weather__key'>
        {' '}
        Ubicación:
        <span className='weather__value'>
          {' '}
          {city}, {country}
        </span>
      </p>
    )}
    {temperature && (
      <p className='weather__key'>
        {' '}
        Temperatura:
        <span className='weather__value'> {temperature}°C </span>
      </p>
    )}
    {humidity && (
      <p className='weather__key'>
        {' '}
        Humedad:
        <span className='weather__value'> {humidity}% </span>
      </p>
    )}
    {wind && (
      <p className='weather__key'>
        {' '}
        Viento:
        <span className='weather__value'> {wind}Km/hr </span>
      </p>
    )}
    {description && (
      <p className='weather__key'>
        {' '}
        Condiciones:
        <span className='weather__value'> {description} </span>
      </p>
    )}
    {error && <p className='weather__error'>{error}</p>}
  </div>
);

export default Weather;
