import React, { Component } from 'react'
import PersonForm from '../components/persons/PersonForm'
import PersonsTable from '../components/persons/PersonsTable'
import { getPersonsList } from '../actions/getPersonsList'
import { connect } from 'react-redux'

class Persons extends Component {

    renderModule() {
        if (this.props.persons) {
            return <PersonsTable persons={this.props.persons} />
        } else {
            return <PersonForm dispatch={this.props.getPersonsList}/>
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


const mapStateToProps = state => {
    return {
        persons: state.persons.list
    }
}


export default connect(mapStateToProps, { getPersonsList })(Persons)