import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom';
import '../styles/main.css'

class Main extends Component {

    render() {

        return (
            <div>
                <img
                    src="logo-black.png"
                    width="500"
                    className="centered-logo"
                    alt="Nation Disaster Hub Logo"
                />
                <ul class="main-grid">
                    <li><NavLink to="/checkin"><img src="checkin.jpg" /><div><h3>Check In</h3></div></NavLink></li>
                    <li><a href="#"><img src="location.jpg" /><div><h3>Find a Person</h3></div></a></li>
                    <li><a href="#"><img src="weather.jpg" /><div><h3>Disaster Status</h3></div></a></li>
                    <li><a href="#"><img src="partners.jpg" /><div><h3>Become a Partner</h3></div></a></li>
                </ul>
            </div>
        )
    }

}

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

export default connect()(Main)