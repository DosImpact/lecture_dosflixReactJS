import React, { Component } from "react";

import { WeatherApi } from "../api/weatherApi";

export default class Weather extends Component {
  state = { loading: true };

  async componentDidMount() {
    const {
      data: {
        main: { temp },
        weather: res
      }
    } = await WeatherApi.getWeather(37, 173);
    console.log(temp, res);
    this.setState({ loading: false, temp, main: res[0].main });
  }
  render() {
    const { loading, temp, main } = this.state;
    return (
      <div>
        {loading ? (
          <span>weatherApi</span>
        ) : (
          <div>
            <span>
              {temp}@{main}
            </span>
          </div>
        )}
      </div>
    );
  }
}
