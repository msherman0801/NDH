import React, { Component } from 'react'
import { postLogin } from '../actions/postLogin'
import { postRegistration } from '../actions/postRegistration'
import LoginForm from '../components/partner/user/LoginForm'
import RegistrationForm from '../components/partner/user/RegistrationForm'
import { connect } from 'react-redux'

class Partner extends Component {

    render() {
        return (
            <div>
                <LoginForm dispatch={this.props.postLogin}/>
                <RegistrationForm dispatch={this.props.postRegistration}/>
            </div>
        )
    }
}


export default connect(null, { postLogin, postRegistration })(Partner)