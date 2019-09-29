import React from 'react'
import LoginForm from './user/LoginForm'
import RegistrationForm from './user/RegistrationForm'

class UserHandler extends React.Component {

    state = {
        currentUser: true
    }

    renderModule() {
        if (this.state.currentUser) {
            return <LoginForm dispatch={this.props.loginDispatch} submit={() => this.changeModule()} />
        } else {
            return <RegistrationForm dispatch={this.props.registrationDispatch} />
        }
    }

    changeModule() {
        
    }


    render() {
        return (
            <div className="left" >
                {this.renderModule()}

            </div>

        )
    }
}

export default UserHandler