import React from 'react';

const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type='text' name='city' placeholder='Ciudad' />
      <input type='text' name='country' placeholder='País' />
      <button>Ver clima</button>
    </form>
  );
};

export default Form;
