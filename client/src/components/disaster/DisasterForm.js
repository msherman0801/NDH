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
            <div>
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input id="city" type="text" placeholder="City" onChange={(e) => this.handleOnChange(e)} />
                    <button type="submit">Find Cities</button>
                </form>
            </div>
        )
    }
}

export default DisasterForm