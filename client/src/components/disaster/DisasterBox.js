import React from 'react'
import WeatherCard from './results/WeatherCard'

class DisasterBox extends React.Component {


    genWeatherCards() {
        let forecasts = this.props.data.DailyForecasts
        return forecasts.map(dayWeatherData => <WeatherCard data={dayWeatherData} />)
    }

    render() {
        return (
            <div>
                {this.genWeatherCards()}
            </div>
        )
    }


}

export default DisasterBox