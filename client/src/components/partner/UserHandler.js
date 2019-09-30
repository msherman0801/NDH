import React from 'react'
import LoginForm from './user/LoginForm'
import RegistrationForm from './user/RegistrationForm'
import UserDash from './user/UserDash'

class UserHandler extends React.Component {

    state = {
        currentUser: true
    }

    renderModule() {
        if (this.props.user) {
            return <UserDash user={this.props.user.user} />
        } else if (this.state.currentUser) {
            return <LoginForm dispatch={this.props.loginDispatch} submit={this.changeModule} />
        } else {
            return <RegistrationForm dispatch={this.props.registrationDispatch} submit={this.changeModule} />
        }
    }

    changeModule = (value) => {
        if (value === 'false') {
            this.setState({ currentUser: false })
        } else {
            this.setState({ currentUser: true })
        }
    }


    render() {
        return (
            <div className="left">
                {this.renderModule()}
            </div>
        )
    }
}

export default UserHandler