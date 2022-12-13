import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {TfiFacebook} from 'react-icons/tfi'
import {TiSocialTwitter} from 'react-icons/ti'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com' target='_blank' rel="noreferrer"><FaGithub/></a>
      <a href='https://facebook.com' target='_blank' rel="noreferrer"><TfiFacebook/></a>
      <a href='https://twitter.com' target='_blank' rel="noreferrer"><TiSocialTwitter/></a>
    </div>
  )
}

export default HeaderSocials
