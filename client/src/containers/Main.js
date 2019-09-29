import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom';
import '../styles/home.css'

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
                    <li className="tl"><NavLink to="/checkin"><img src="checkin.jpg" /><div><h3>Check In</h3></div></NavLink></li>
                    <li className="tr"><NavLink to="/person"><img src="location.jpg" /><div><h3>Find a Person</h3></div></NavLink></li>
                    <li className="bl"><NavLink to="/disaster"><img src="weather.jpg" /><div><h3>Disaster Status</h3></div></NavLink></li>
                    <li className="br"><NavLink to="/partner"><img src="partners.jpg" /><div><h3>Become a Partner</h3></div></NavLink></li>
                </ul>
            </div>
        )
    }

}

export default connect()(Main)