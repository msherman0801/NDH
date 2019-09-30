import React from 'react'

class LoginForm extends React.Component {

    state = {
        username: '',
        password: ''
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
            <div className="login-container">
                <form className="sm-form" onSubmit={this.handleOnSubmit}>
                    <input className="sm-form-input" id="username" type="text" placeholder="Username" onChange={e => this.handleOnChange(e)} />
                    <input className="sm-form-input" id="password" type="text" placeholder="Password" onChange={e => this.handleOnChange(e)} />
                    <button className="sm-form-button" type="submit">Login</button>
                </form>  
                <button id="login-button" className="sm-form-button" onClick={() => this.props.submit('false')}>Switch to Registration</button>
            </div>
        )
    }
}

export default LoginForm