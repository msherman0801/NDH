import React from 'react'

const UserDash = props =>
    <div className="user-dash">
                <h4>Partner:</h4>
                <p className="label">Username:</p><p className="key">{props.user.username}</p>
                <p className="label">Organization:</p><p className="key">{props.user.organization}</p>
                <p className="label">Representative Name:</p><p className="key">{props.user.first_name} {props.user.last_name}</p>
                <h4>API Status:</h4>
                <p className="label">Your API Key:</p><p className="key">{props.user.api_key}</p>
                <p id="approved">APPROVED</p>
    </div>


export default UserDash