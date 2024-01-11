import React from 'react'
import logo from '../../assets/images/logo.png'

function Loginheader() {
  return (
    <>
    <div className='col-lg-12'>
    <div className='brand-logo'>
            <a href="/">
                <img src={logo} alt=''></img>
            </a>
        </div>
    </div>
    </>
  )
}

export default Loginheader