import React, { Component } from 'react'
import PersonForm from '../components/persons/PersonForm'
import PersonsTable from '../components/persons/PersonsTable'
import { getPersonsList } from '../actions/getPersonsList'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../styles/containers.css'

class Persons extends Component {

    renderModule() {
        if (this.props.persons) {
            return <PersonsTable persons={this.props.persons} />
        } else {
            return <PersonForm dispatch={this.props.getPersonsList}/>
        }
    }

    render() {

        const background = {
            height: '100vh',
            width: '100%',
            opacity: '1',
            backgroundImage: `url(location.jpg)`,
            backgroundSize: 'cover'
        }

        const overlay = {
            height: '100vh',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }

        return (
            <div style={background}>
                <img
                    src="logo.png"
                    width="500"
                    className="top-centered-logo"
                    alt="Nation Disaster Hub Logo"
                />
                <div className="back-arrow-box">
                    <NavLink to="/"><img 
                        
                        width="30"
                        src="back-arrow.png" 
                    /></NavLink>
                </div>
                <div style={overlay} className="person-container">
                    
                    {this.renderModule()}
                </div>
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