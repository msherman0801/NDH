import React, { Component } from 'react';
import { connect } from 'react-redux'

class NewComponent extends Component {

    state = {
      persons: 'persons'
    }
  
    componentDidMount() {
        this.props.addPerson(this.state.persons)
    }

    fetchData() {
        fetch('http://localhost:3001/post', {
            mode: 'cors',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify('baller')
        })
            .then(res => res.json())
            .then(json => console.log(json))


    }

    render() {
        return (
            <div>
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