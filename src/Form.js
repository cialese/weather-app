import React from 'react';

const Form = ({ onSubmit, isDisabled, form, handleChange }) => {
  const { city, country } = form;

  return (
    <form onSubmit={ onSubmit }>
      <input type='text' name='city' placeholder='City' value={ city } onChange={ handleChange } />
      <input type='text' name='country' placeholder='Country' value={ country } onChange={ handleChange } />
      <button disabled={ isDisabled }>Get weather</button>
    </form>
  );
};

export default Form;
