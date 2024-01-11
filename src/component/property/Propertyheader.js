import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user-icon.png'

function Propertyheader() {
  return (
    <>
        <div className='propery-headr'>
            <div className='propery-headr-brand'>
                <Link to="/"><img src={logo} alt='' /> </Link>
            </div>
            <div className='propery-headr-icon'>
                <Link>
                <img src={user} /> 
                </Link>
            </div>
        </div>
    </>
  )
}

export default Propertyheader