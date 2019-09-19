import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckInForm from '../components/checkIn/CheckInForm'
import CheckInCard from '../components/checkIn/CheckInCard'
import { postingCheckIn } from '../actions/postingCheckIn';

class CheckIn extends Component {

    renderModule() {
        if (this.props.person) {
            console.log(this.props.person)
            return <CheckInCard person={this.props.person} />
        } else {
            console.log(this.props.person)
            return <CheckInForm dispatch={this.props.postingCheckIn} />
        }
    }

    render() {
        return (
            <div>
                {this.renderModule()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        person: state.checkIn.person
    }
}

export default connect(mapStateToProps, { postingCheckIn })(CheckIn)