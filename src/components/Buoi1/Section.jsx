import React from 'react'


export const Section = () => {
  return (
    <>
    <div className='section'>
        <div className='section-content'>
            <div className='info' >
                <h1 className='info--heading'>Better Solutions For Your Business</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div className='info--btn'>
                    <a className='info--btn-link' href="">Get Started</a>
                    <a className='info--btn-link' href="">
                        <i className='info--btn-icon fa-regular fa-circle-play'></i>
                        <span>Watch Video</span>
                    </a>
                </div>
            </div>
            <div className='section-img'>
                <img src='https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png'/>
            </div>
        </div>
    </div>
    </>
  )
}
