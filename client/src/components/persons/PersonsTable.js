import React from 'react'
import Row from './Row'

class PersonsTable extends React.Component {

    genRows() {
        return this.props.persons.map(person => <Row person={person} />)
    }

    render() {
        return (
            <div className="person-box">
                <table className="person-table">
                    <tr>
                        <th></th>
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