import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckInForm from '../components/checkIn/CheckInForm'
import { postingCheckIn } from '../actions/postingCheckIn';

class CheckIn extends Component {

    render() {
        return (
            <div>
                <CheckInForm dispatch={this.props.postingCheckIn} />
            </div>
        )
    }

}

export default connect(null, { postingCheckIn })(CheckIn)