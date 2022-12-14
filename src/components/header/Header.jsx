import React from 'react'
import './header.css';
import CTA from './CTA';
import istockphoto3 from '../../assets/istockphoto3.jpeg';
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Clara Iwuala</h1>
          <h5 className='text-light'>Frontend Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className='me'>
            <img src={istockphoto3} alt='me'/>
          </div>

          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
