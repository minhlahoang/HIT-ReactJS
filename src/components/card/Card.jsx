import React from 'react'


export const Card = (props) => {
  return (
            <div className="card">
                <div className="card-info">
                    <h1 className='card-title'>{props.title}</h1>
                    <p className='card-content'>{props.content}</p>
                    <div className="card-learn">
                        <a className='card-link' href="https://www.google.com/">Learn more</a>
                        <i class="fa-solid fa-arrow-right" href="google.com"></i>
                    </div>
                </div>
                    <img className='card-img' src={props.image} alt="" />
                    <img className='card-background' src={props.background} alt="" />
            </div>
    )
}
