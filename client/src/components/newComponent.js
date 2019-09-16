import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

class NewComponent extends Component {

    state = {
      persons: 'persons'
    }
  
    componentDidMount() {
        this.props.addPerson(this.state.persons)
    }

    fetchData() {
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(ip => {
                fetch('http://localhost:3001/post', {
                    mode: 'cors',
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(ip)
                })
                    .then(res => res.json())
                    .then(json => console.log(json))
            }
        )

    }

    render() {
        return (
            <div>
                <NavLink to="/" activeStyle={{background: 'darkblue'}}>Home</NavLink>
                <p>{this.props.persons}</p>
                <button onClick={this.fetchData}>test</button>
            </div>
        )
    }
}
  
  
  const mapStateToProps = state => {
    return {
      persons: state.persons.persons
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addPerson: person => dispatch({type: 'ADD_PERSON', payload: person})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);