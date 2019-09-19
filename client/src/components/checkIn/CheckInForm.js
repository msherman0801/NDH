import React from 'react'
import InputField from './InputField'

class CheckInForm extends React.Component {

    state = {
        familyMemberCount: 1,
        form: {
            first_name: '',
            last_name: '',
            location: ''
        },
        button: <button onClick={(e) => this.addInput(e)}>Add Family Member</button>

    }

    handleOnChange = e => {
        this.setState({ ...this.state, form: { ...this.state.form, [e.target.id]: e.target.value } })
    }

    addInput(e) {
        e.preventDefault();
        this.setState({ 
            familyMemberCount: (() => {
                if (this.state.familyMemberCount < 5) {
                    return this.state.familyMemberCount + 1
                } else {
                    this.setState({button: <button onClick={(e) => this.addInput(e)} disabled>Add Family Member</button>})
                    return 5
                }
                })()
            })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.dispatch(this.state.form)
    }

    render() {

        const inputFields = []

        for (var i = 1; i < this.state.familyMemberCount; i += 1) {
            inputFields.push(<InputField id={"family_member_"+i} type="text" placeholder={"Family Member " + i} onChange={e => this.handleOnChange(e)}/>);
        };

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <InputField id="first_name" type="text" placeholder="First Name" onChange={this.handleOnChange} />
                    <InputField id="last_name" type="text" placeholder="Last Name" onChange={this.handleOnChange} />
                    <InputField id="location" type="text" placeholder="Location" onChange={this.handleOnChange} />
                    {inputFields}
                    {this.state.button}
                    <InputField id="submit" type="submit" placeholder="Submit" />
                </form>
            </div>
        )
    }
}

export default CheckInForm