import React from 'react'

function isTracked(person) {
    if (person.tracker) {
        return <td>{person.tracker.city}, {person.tracker.region_name} {person.tracker.zip}</td>
    } else {
        return <br />
    }
}

const Row = props => 
    <tr>
        <td><img 
            src="ok.ico"
            width='15px'
        /></td>
        <td>{props.person.first_name}</td>
        <td>{props.person.last_name}</td>
        <td>{props.person.location}</td>
        <td>{props.person.family_member_1}</td>
        <td>{props.person.family_member_2}</td>
        <td>{props.person.family_member_3}</td>
        <td>{props.person.family_member_4}</td>
        {isTracked(props.person)}
        {/*<td className="edit-buttons"><button className="edit">Edit</button><button className="delete">Delete</button></td>*/}
    </tr>

export default Row