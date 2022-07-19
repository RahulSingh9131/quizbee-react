import React from 'react'
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';


const TextFieldComp = () => {
    const dispatch=useDispatch();
    const handleChange=(e)=>{
      dispatch(handleAmountChange(e.target.value));
    }

  return (
    <div className='textfield-comp'>
        <div>
            <input type="number" placeholder="Amount Of Questions" onChange={handleChange}/>
        </div>
    </div>
  )
}

export default TextFieldComp