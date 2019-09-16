import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {

    render() {
        return (
            <div>
                <p>Person</p>
            </div>
        )
    }

}

export default connect()(Person)