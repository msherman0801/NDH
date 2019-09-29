import React from 'react'
import CityCard from './results/CityCard'

class cityBox extends React.Component {


    genCityCards() {
        let cities = this.props.cities
        return cities.map(city => <div class="column"><CityCard dispatch={this.props.dispatch} city={city} /></div>)
    }

    render() {
        return (
            <div className="city-box">
                    <div class="row">
                        {this.genCityCards()}
                    </div>
            </div>
        )
    }


}

export default cityBox