import React from 'react'

const hrStyle = {
    width: '25%',
    color: 'white',
    marginTop: '1em;'
  };

const CheckInCard = props => 
    <div className="centered twy checkin-card">
        <center>
            <h3>Thank you for checking in, <h3 className="text-blue">{props.person.first_name}</h3>.</h3>
            <h3>We are relieved to hear you are safe. Checking in will help your loved ones find that same relief. </h3>
            <br></br>
            <h5>What your loved ones will be able to see:</h5>
            <div class="middle">
                <p>Name: <p className="text-blue">{`${props.person.first_name} ${props.person.last_name}`}</p></p>
                <p>Provided Location: <p className="text-blue">{props.person.location}</p></p>
                <p>Family Member 1: <p className="text-blue">{props.person.family_member_1}</p></p>
                <p>Family Member 2: <p className="text-blue">{props.person.family_member_2}</p></p>
                <p>Family Member 3: <p className="text-blue">{props.person.family_member_3}</p></p>
                <p>Family Member 4: <p className="text-blue">{props.person.family_member_4}</p></p>
            </div>
            <br></br>
            <h5>Last tracked location. Keep in mind that this location may not be accurate. We do our best to lock in a location from internet service providers.</h5>
            <div class="middle">
                <p>Continent: <p className="text-red">{props.person.tracker.continent_name}</p></p>
                <p>Country: <p className="text-red">{props.person.tracker.country_name}</p></p>
                <p>Region: <p className="text-red">{props.person.tracker.region_name}</p></p>
                <p>City: <p className="text-red">{`${props.person.tracker.city} - ${props.person.tracker.zip}`}</p></p>
                <p>Latitude: <p className="text-red">{props.person.tracker.latitude}</p></p>
                <p>Longitude: <p className="text-red">{props.person.tracker.longitude}</p></p>
            </div>
        </center>
    </div>


export default CheckInCard