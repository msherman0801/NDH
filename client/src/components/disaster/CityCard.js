import React from 'react'

const CityCard = props => 
    <div onClick={() => props.dispatch(props.city.Key)}>
        <p>{props.city.EnglishName}</p>
        <h1>{props.city.Country.LocalizedName}</h1>
        <h3>{props.city.Region.LocalizedName}</h3>
    </div>

export default CityCard