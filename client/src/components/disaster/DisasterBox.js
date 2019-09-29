import React from 'react'
import WeatherCard from './results/WeatherCard'

class DisasterBox extends React.Component {


    genWeatherCards() {
        let forecasts = this.props.data.DailyForecasts
        return forecasts.map(dayWeatherData => <WeatherCard data={dayWeatherData} img={this.determineWeather(dayWeatherData)} />)
    }

    determineWeather(data) {
        let icon = data.Day.Icon

        if (icon < 6) {
            return "weather_cards/sun.jpg"
        } else if (icon>5 && icon<12) {
            return "weather_cards/clouds.jpg"
        } else if (icon>11 && icon<19) {
            return "weather_cards/rain.jpg"
        } else if (icon>18 && icon<30) {
            return "weather_cards/snow.jpg"
        }
    }

    render() {
        return (
            <div className="disaster-box">
                <a href="/disaster"><button className="sm-form-button" style={{width: '220px'}} type="submit">Search Locations</button></a>
                <ul>
                    {this.genWeatherCards()}
                </ul>
            </div>
        )
    }


}

export default DisasterBox