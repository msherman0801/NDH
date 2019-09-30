import React, { Component } from 'react'
import DisasterForm from '../components/disaster/DisasterForm'
import CityBox from '../components/disaster/CityBox'
import DisasterBox from '../components/disaster/DisasterBox'
import { getCityIds } from '../actions/getCityIds'
import { getCityData } from '../actions/getCityData'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../styles/containers.css'

class Disaster extends Component {

    state = {
        logo: <img src="logo.png" width="500" className="top-centered-logo" alt="Nation Disaster Hub Logo" />
    }
    
    renderModule() {
        if (this.props.cityData) {
            return <DisasterBox data={this.props.cityData} />
        } else if (this.props.cities) {
            return <CityBox dispatch={this.props.getCityData} cities={this.props.cities} />
        } else {
            return <DisasterForm dispatch={this.props.getCityIds}/>
        }
    }

    handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY !== 0) {
            this.setState({logo: <img src="logo-black.png" width="500" className="top-centered-logo" alt="Nation Disaster Hub Logo" />})
        } else {
            this.setState({logo: <img src="logo.png" width="500" className="top-centered-logo" alt="Nation Disaster Hub Logo" />})
        }
        
    }


    render() {

        const background = {
            height: '100vh',
            width: '100%',
            opacity: '1',
            backgroundImage: `url(weather.jpg)`,
            backgroundSize: 'cover'
        }

        const overlay = {
            height: '100vh',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }
        
        return (
            <div style={background} onScroll={this.handleScroll} >
                {this.state.logo}
                <div className="back-arrow-box">
                    <NavLink to="/"><img 
                        
                        width="30"
                        src="back-arrow.png" 
                    /></NavLink>
                </div>

                <div className="disaster-container" style={overlay}>
                    {this.renderModule()}
                </div>
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

export default connect(mapStateToProps, { getCityIds, getCityData })(Disaster)