import React from 'react';

const WeatherTitle = () => (
  <div>
    <h1 className='title-container__title'>Weather App</h1>
    <h3 className='title-container__subtitle'>
      Find out the temperature, weather conditions and more...
    </h3>
  </div>
);

export const WeatherCover = React.memo(WeatherTitle);
