import React from 'react'

class DisasterForm extends React.Component {

    state = {
        city: ''
    }

    handleOnChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.dispatch(this.state)
        this.setState({city:''})
    }
    render() {
        return (
            <div className="centered">
                <form className="sm-form" onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input className="sm-form-input" id="city" type="text" placeholder="City" onChange={(e) => this.handleOnChange(e)} />
                    <button className="sm-form-button" type="submit">Find Cities</button>
                </form>
            </div>
        )
    }
}

export default DisasterForm