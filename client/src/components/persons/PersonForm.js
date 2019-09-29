import React from 'react'


class PersonForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        location: ''
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
            <div className="centered">
                <form className="sm-form" onSubmit={e => this.handleOnSubmit(e)}>
                    <input id="first_name" className="sm-form-input" type="text" onChange={e => this.handleOnChange(e)} placeholder="First Name"/>
                    <input id="last_name" className="sm-form-input" type="text" onChange={e => this.handleOnChange(e)} placeholder="Last Name"/>
                    <input id="location" className="sm-form-input" type="text" onChange={e => this.handleOnChange(e)} placeholder="City of Residency"/>
                    <button className="sm-form-button" type="submit">Find Person</button>
                </form>
            </div>
        )
    }
}


export default PersonForm