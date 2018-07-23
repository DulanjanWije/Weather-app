import React, { Component } from 'react';


class Weather extends Component {

  render() {
    return (
      <div className="weather__info">
      { this.props.city && this.props.country && <p className="weather__key"> Location: { this.props.city },{ this.props.country } </p> }
      { this.props.temperature && <p className="weather__key"> Temperature: { this.props.temperature } </p> }
      { this.props.humidity && <p className="weather__key"> Humidity: { this.props.humidity } </p> }
      { this.props.description && <p className="weather__key"> Description: { this.props.description } </p> }
      { this.props.error && <p className="weather__key"> Error: { this.props.error } </p> }
      </div>
    );
  }
}

export default Weather;
