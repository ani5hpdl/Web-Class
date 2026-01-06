import React from 'react'

const Input = (props) => {
  return (
    <input 
    type={props.type}
    placeholder={`Enter ${props.name} Here..`}
    id = {props.name}
    name = {props.name}
    onChange={props.handleChange}
    value={props.formData[props.name]}
    className='border m-2 w-50' 
    />
  )
}

export default Input
