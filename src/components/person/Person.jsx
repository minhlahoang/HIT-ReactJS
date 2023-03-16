import React from 'react'

export const Person = (props) => {
  return (
    <div>
        {/* <img src={props.avt} alt="day la anh" />
        <h1>Hoang Dep Trai</h1> */}
        <h1>{props.children}</h1>
      <ul>
          <li><b>Tên:</b> {props.name}</li>
          <li><b>Loại:</b> {props.type}</li>
          <li><b>Màu:</b>  {props.color}</li>
          <li><b>Kích cỡ:</b>  {props.size}</li>
      </ul>
      <hr></hr>
    </div>
  )
}
