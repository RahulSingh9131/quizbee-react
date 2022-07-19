import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';

const SelectField = (props) => {
    const {label,options}=props;
    const [value,setValue]=useState("");
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setValue(e.target.value);
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
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