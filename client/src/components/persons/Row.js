import React from 'react'
import './styling.css'

function isTracked(person) {
    if (person.tracker) {
        return <th>{person.tracker.city}, {person.tracker.region_name} {person.tracker.zip}</th>
    } else {
        return <br />
    }
}

const Row = props => 
    <tr>
        <th>{props.person.first_name}</th>
        <th>{props.person.last_name}</th>
        <th>{props.person.location}</th>
        <th>{props.person.family_member_1}</th>
        <th>{props.person.family_member_2}</th>
        <th>{props.person.family_member_3}</th>
        <th>{props.person.family_member_4}</th>
        {isTracked(props.person)}
        <td className="edit-buttons"><button className="edit">Edit</button><button className="delete">Delete</button></td>
    </tr>

export default Row