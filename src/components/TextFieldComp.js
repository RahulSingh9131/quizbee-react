import React from 'react'

const TextFieldComp = () => {

    const handleChange=()=>{}

  return (
    <div className='textfield-comp'>
        <div>
            <input type="number" placeholder="Amount Of Questions" onChange={handleChange}/>
        </div>
    </div>
  )
}

export default TextFieldComp