import React, { Component } from 'react'
import DisasterForm from '../components/disaster/DisasterForm'
import CityCard from '../components/disaster/CityCard'
import DisasterBox from '../components/disaster/DisasterBox'

import { gettingCityIds } from '../actions/gettingCityIds'
import { getCityData } from '../actions/getCityData'
import { connect } from 'react-redux'

class Disaster extends Component {


    renderModule() {
        if (this.props.cityData) {
            return <DisasterBox data={this.props.cityData} />
        } else if (this.props.cities) {
            return this.props.cities.map(city => <CityCard dispatch={this.props.getCityData} city={city} />)
        } else {
            return <DisasterForm dispatch={this.props.gettingCityIds}/>
        }
    }


    render() {
        return (
            <div>
                {this.renderModule()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        cities: state.disaster.cities,
        cityData: state.disaster.cityData
    }
}

export default connect(mapStateToProps, { gettingCityIds, getCityData })(Disaster)