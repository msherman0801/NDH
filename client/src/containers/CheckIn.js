import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckInForm from '../components/checkIn/CheckInForm'
import CheckInCard from '../components/checkIn/CheckInCard'
import { NavLink } from 'react-router-dom';
import { postCheckIn } from '../actions/postCheckIn';
import '../styles/containers.css'


class CheckIn extends Component {

    renderModule() {
        if (this.props.person) {
            console.log(this.props.person)
            return <CheckInCard person={this.props.person} />
        } else {
            console.log(this.props.person)
            return <CheckInForm dispatch={this.props.postCheckIn} />
        }
    }

    render() {

        const background = {
            height: '100vh',
            width: '100%',
            opacity: '1',
            backgroundImage: `url(checkin.jpg)`,
            backgroundSize: 'cover'
        }

        const overlay = {
            height: '100vh',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }

        return (
            <div style={background}>

                <img
                    src="logo.png"
                    width="500"
                    className="top-centered-logo"
                    alt="Nation Disaster Hub Logo"
                />
                <div className="back-arrow-box">
                    <NavLink to="/"><img 
                        
                        width="30"
                        src="back-arrow.png" 
                    /></NavLink>
                </div>
                <div style={overlay}>
                    {this.renderModule()}
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        person: state.checkIn.person
    }
}

export default connect(mapStateToProps, { postCheckIn })(CheckIn)