import React from 'react'

const WeatherCard = props => 
    <div style={{textAlign: 'center'}}>
        <img src={`${require(`./icons/${props.data.Day.Icon}.png`)}`} /><h2>{props.data.Day.IconPhrase}</h2>
        <h5>Temperature: High {props.data.Temperature.Maximum.Value}&#8457; and Low {props.data.Temperature.Minimum.Value}&#8457;</h5>
        <hr style={{width: '25%'}}/>
    </div>

export default WeatherCard