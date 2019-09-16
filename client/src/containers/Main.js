import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { NavLink } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>
                <NavLink to="/checkin" exact style={link} activeStyle={{background: 'darkblue'}}>Check In</NavLink>
                <NavLink to="/person" exact style={link} activeStyle={{background: 'darkblue'}}>Check Status of Person</NavLink>
                <NavLink to="/disaster" exact style={link} activeStyle={{background: 'darkblue'}}>Check Status of Disaster</NavLink>
                <NavLink to="/partner" exact style={link} activeStyle={{background: 'darkblue'}}>Become a Check In Partner</NavLink>
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