import React from 'react'
import Row from './Row'
import './styling.css'

class PersonsTable extends React.Component {

    genRows() {
        return this.props.persons.map(person => <Row person={person} />)
    }

    render() {
        return (
            <div>
                <h2>My Sweet Table</h2>
                <table className="table">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hometown</th>
                        <th>Family Member 1</th>
                        <th>Family Member 2</th>
                        <th>Family Member 3</th>
                        <th>Family Member 4</th>
                        <th>Last Tracked GeoLocation</th>
                    </tr>
                    {this.genRows()}
                </table>
            </div>
        )
    }
}

export default PersonsTable