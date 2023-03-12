import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
    <div className='container'>
        <div className='logo'>
            <h1 ><a href="#">ARSHA</a></h1>
        </div>
        
        <div className='navbar'>
            <ul className='navbar-menu'>
                <li><a className='navbar-menu--link navbar-menu--link-active' href="">Home</a></li>
                <li><a className='navbar-menu--link' href="">About</a></li>
                <li><a className='navbar-menu--link' href="">Services</a></li>
                <li><a className='navbar-menu--link' href="">Portfolio</a></li>
                <li><a className='navbar-menu--link' href="">Team</a></li>

                <li className='dropdown'>
                    <a className='navbar-menu--link' href="">
                        Drop Down
                        <i className='dropdown-icon fa-sharp fa-solid fa-chevron-down'></i>
                    </a>
                    <ul className='dropdown-list'>
                        <li>
                            <a className='navbar-menu--link' href="">Drop Down 1</a>
                        </li>
                        <li className='dropdown'>
                            <a className='navbar-menu--link' href="#">
                              Deep Drop Down
                               <i className='fa-solid fa-chevron-right'></i>
                            </a>
                            <ul className='dropdown-list__deep'>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className='navbar-menu--link' href="">Drop Down 2</a>
                        </li>
                        <li>
                            <a className='navbar-menu--link' href="">Drop Down 3</a>
                        </li>
                        <li>
                            <a className='navbar-menu--link' href="">Drop Down 4</a>
                        </li>
                    </ul>
                </li>
                <li><a className='navbar-menu--link' href="">Contact</a></li>
                <li><a className='navbar-menu--link getstarted' href="">Get Started</a></li>
            </ul>
        </div>
    </div>
</div>
  )
}
