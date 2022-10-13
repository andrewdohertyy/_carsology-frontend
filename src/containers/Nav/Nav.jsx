import React from 'react'
import './Nav.scss';

const Nav = ({title}) => {
  return (
    <div className='nav'>
        <h3 className='nav__title' href="./" >{title}</h3>
    </div>
  )
}

export default Nav