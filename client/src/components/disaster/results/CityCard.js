import React from 'react'

const CityCard = props => 
    <div className="city-card" onClick={() => props.dispatch(props.city.Key)}>
        <p>{props.city.EnglishName}</p>
        <h3>{props.city.Country.LocalizedName}</h3>
        <h3>{props.city.Region.LocalizedName}</h3>
    </div>

export default CityCard