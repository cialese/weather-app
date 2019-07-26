import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';
import Titles from './Titles';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const API = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=4c8dd3d3abc442a432a5a6186678f244&units=metric`
      );
      const data = await API.json();

      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          description: data.weather[0].description,
          error: ''
        });
      } else {
        this.setState({
          error: 'Completa los campos'
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <div className='col-5 col-xs-12 title-container'>
                  <Titles />
                </div>
                <div className='col-7 col-xs-12 form-container'>
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    wind={this.state.wind}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
