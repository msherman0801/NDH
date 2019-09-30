import React from 'react'
import Moment from 'react-moment';

const WeatherCard = props => 
    <li>
        {console.log(props.data)}
        <div className="top" style={{backgroundImage: `url(${props.img})`}} >
            <div className="temperature">
                <h3>High of {props.data.Temperature.Maximum.Value}&#8457;</h3>
                <p>&</p>
                <h5>Low of {props.data.Temperature.Minimum.Value}&#8457;</h5>
            </div>
        </div>
        <div className="bottom">
            <img src={`${require(`./icons/${props.data.Day.Icon}.png`)}`} />
            <div className="content">
                <p>{props.data.Day.IconPhrase}</p>
                <Moment format="MMM Do YY">{props.data.Date}</Moment>
                <a style={{display:'block'}} href={props.data.MobileLink}>Get more information</a>
            </div>
        </div>
    </li>

export default WeatherCard