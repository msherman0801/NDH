import React from 'react'

const InputField = (props) => 
    <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} />


export default InputField
