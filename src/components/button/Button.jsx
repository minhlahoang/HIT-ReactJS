import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button className="button">
            {props.children}
        </button>
    </div>
  )
}
