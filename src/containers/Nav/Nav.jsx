import React from 'react'
import './Nav.scss';

const Nav = ({title}) => {
  return (
    <div className='nav'>
        <h1 className='nav__title' href="./" >{title}</h1>
    </div>
  )
}

export default Nav