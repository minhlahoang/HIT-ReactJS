import React, { useState } from 'react'

export const Toggle = () => {
    const [toggleButton,setToggleButton] = useState(false);
    const handleClick = () => {
        setToggleButton(!toggleButton)
    }

  return (
    <div onClick={handleClick} className='toggle'>
        {
            toggleButton?<div className="toggle_left"></div>:
        <div className="toggle_right"></div>}
    </div>
  )
}
