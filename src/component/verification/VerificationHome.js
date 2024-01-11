import React from 'react'
import '../../assets/css/style.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function VerificationHome() {
  return (
    <>
    <div className='banner-head'>
        <a href="javascrip:void(0)"><img src={logo}  alt=''/></a>
    </div>
    <section className='banner-sec'>
        <div className='container'>
            <h1>Capture yourself for verification!</h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='banner-content'>
                        <h3>To verify your identity, we need you to record a selfie video/image.</h3>
                    </div>
                </div>
            </div>
            <div className='bannr-btn'>
                <Link to='/capture-face'>Continue</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default VerificationHome