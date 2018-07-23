import React, { Component } from 'react';
import './App.css';
import TitleHeadings from './Components/TitleHeadings';
import Form from './Components/Form';
import Weather from './Components/Weather';

//assigning the API KEY obtained from the open weather map website
const API_KEY = "dacacd56b03430ce6c53efc8d88faabd";

class App extends Component {

constructor(props){
  super(props);
  this.getWeather = this.getWeather.bind(this);
}

state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}

 async getWeather(event) {
   event.preventDefault();

   //obtaining values from the Form inputs
   const city = event.target.elements.city.value;
   const country = event.target.elements.country.value;
    //a variable that contains the function that makes the call from t he url
    //obtaining the api key and embedding it to the url of open weather map website
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //converts the data obtained from the api to readable format
    const data = await api_call.json();

    //to ensure that values are entered properly
    if(city && country) {

    console.log(data);
        //assigns the attributes in the default state to the values obtained from the API
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });

  } else {

        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please Enter The Values"
        });
      }
    }

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
              <div className="form-container">
              <h2 className="title-container__title">Check Weather</h2>
              <h3 className="title-container__subtitle">Current Temperature, Condition and More Details</h3>
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
