import React from 'react'

const hrStyle = {
    width: '25%',
    color: 'white',
    marginTop: '1em;'
  };

const CheckInCard = props => 
    <div className="centered checkin-card">
        <center>
            <h3>Thank you for checking in, {props.person.first_name}.</h3>
            <h3>We are relieved to hear you are safe. Checking in will help your loved ones find that same relief. </h3>
            <hr style={hrStyle} />

            <h5>What your loved ones will be able to see:</h5>
            <hr style={hrStyle} />

            <p>Name: {`${props.person.first_name} ${props.person.last_name}`}</p>
            <p>Provided Location: {props.person.location}</p>
            <p>Family Member 1: {props.person.family_member_1}</p>
            <p>Family Member 2: {props.person.family_member_2}</p>
            <p>Family Member 3: {props.person.family_member_3}</p>
            <p>Family Member 4: {props.person.family_member_4}</p>
            <br></br>
            <h5>Last tracked location. Keep in mind that this location may not be accurate. We do our best to lock in a location from internet service providers.</h5>
            <p>Continent{props.person.tracker.continent_name}</p>
            <p>{props.person.tracker.country_name}</p>
            <p>{props.person.tracker.region_name}</p>
            <p>{`${props.person.tracker.city} - ${props.person.tracker.zip}`}</p>
            <p>{props.person.tracker.latitude}</p>
            <p>{props.person.tracker.longitude}</p>
        </center>
    </div>


export default CheckInCard