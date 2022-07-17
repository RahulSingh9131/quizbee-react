import React, { useState } from 'react'

const SelectField = (props) => {
    const {label,options}=props;
    const [value,setValue]=useState("");

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

  return (
    <div className='select-field'>
        <div>
            <label>{label}</label>
            <select name={label} placeholder="category" value={value} onChange={handleChange}>
                {options?.map(({id,name})=>(
                    <option value={id} key={id}>{name}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default SelectField