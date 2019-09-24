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
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input id="username" type="text" placeholder="Username" onChange={e => this.handleOnChange(e)} />
                    <input id="password" type="text" placeholder="Password" onChange={e => this.handleOnChange(e)} />
                    <button type="submit">Login</button>
                </form>  
            </div>
        )
    }
}

export default LoginForm