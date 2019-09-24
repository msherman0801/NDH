import React from 'react'
import '../../styles/forms.css'

const InputField = (props) => 
    <input id={props.id} className={props.className} type={props.type} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} />


export default InputField
