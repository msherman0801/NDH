import React from 'react'

class RegistrationForm extends React.Component {

    state = {
        username: '',
        password: '',
        email: ''
    }

    handleOnChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.dispatch(this.state)
    }

    render() {
        return (
            <div className="registration-container">
                <form className="sm-form" onSubmit={this.handleOnSubmit}>
                    <input className="sm-form-input" id="username" type="text" placeholder="Username" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="password" type="text" placeholder="Password" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="email" type="text" placeholder="Email" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="first_name" type="text" placeholder="First Name" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="last_name" type="text" placeholder="Last Name" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="organization" type="text" placeholder="Organization" onChange={e => this.handleOnChange(e)} />
                    <button className="sm-form-button" type="submit">Create Account</button>
                </form>
                <button id="login-button" className="sm-form-button" onClick={() => this.props.submit('true')}>Switch to Login</button>
                
            </div>
        )
    }
}

export default RegistrationForm