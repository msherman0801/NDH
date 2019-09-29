import React, { Component } from 'react'
import { postLogin } from '../actions/postLogin'
import { postRegistration } from '../actions/postRegistration'
import UserHandler from '../components/partner/UserHandler'
import UserDash from '../components/partner/user/UserDash'
import PartnerInfo from '../components/partner/PartnerInfo'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../styles/containers.css'

class Partner extends Component {

    renderModule() {
        if (this.props.user === null) {
            return <UserHandler loginDispatch={this.props.postLogin} registrationDispatch={this.props.postRegistration} />
        } else {
            return <UserDash dispatch={this.props.user} />
        }
    }

    render() {

        const background = {
            height: '100vh',
            width: '100%',
            opacity: '1',
            backgroundImage: `url(partners.jpg)`,
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
                    <NavLink to="/" className="home-link"><img
                        width="30"
                        src="back-arrow.png" 
                    /> Back Home </NavLink>
                </div>
                <div style={overlay} className="partner-container">
                    <div className="partner-box">
                        {this.renderModule()}
                        <PartnerInfo />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.partners.user
    }
}

export default connect(mapStateToProps, { postLogin, postRegistration })(Partner)