
import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys';

// function App() {
class App extends React.Component {

  state = {
    temperature: '',
    description: '',
    himidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  }


  getWeather = async e => {

    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {

      // const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;

      const url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();


      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        himidity: data.main.himidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });
      
    } else {
      this.setState({ error: 'Please Enter a city and a country' })
    }
  }





  render() {

    return (
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4 mx-auto'>
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state} />
          </div>
        </div>

        

      </div>

    );
  }
}
export default App;
