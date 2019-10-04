import React from 'react';

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type='text' name='city' placeholder='City' />
      <input type='text' name='country' placeholder='Country' />
      <button>Get weather</button>
    </form>
  );
};

export default Form;
