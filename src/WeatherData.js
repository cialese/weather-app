import React from 'react';

const WeatherData = ({ data, error }) => {
  const {
    country,
    city,
    temperature,
    humidity,
    wind,
    condition,
    conditionIcon
  } = data;

  const noData = 'No available information'

  return (
    <div className='weather__info'>
      { city && country ? (
        <div>
          <p className='weather__key'>
            Location:{ ' ' }
            <span className='weather__value'>
              { city }, { country }
            </span>
          </p>
          <p className='weather__key'>
            Temperature:
            <span className='weather__value'> { temperature ? `${temperature}°C` : noData }</span>
          </p>

          <p className='weather__key'>
            Humidity:
            <span className='weather__value'> { humidity ? `${humidity}%` : noData }</span>
          </p>

          <p className='weather__key'>
            Wind:{ ' ' }
            <span className='weather__value'>{ wind ? `${wind}Km/hr` : noData }</span>
          </p>

          <p className='weather__key'>
            Condition:
            <span className='weather__value'> { condition ? condition : noData } </span>
          </p>
        </div>
      ) : null }
      { condition ? <div><img src={ conditionIcon } alt='weather condition' className='weather__icon'/> </div>: null }

      { error ? <p className='weather__error'>{ error }</p> : null }
    </div>
  )
};

export default WeatherData;
