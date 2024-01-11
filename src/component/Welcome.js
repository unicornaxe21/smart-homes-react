import React from 'react'
import hand from '../assets/images/hand.png'
import bannerimg from '../assets/images/banner-img.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Welcome() {
  return (
    <>
    <section className='hm-banner'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-9'>
                    <div className='hm-banner-content'>
                        <h1>"Empowering efficiency through smart automation in IoT, where intelligence meets innovation to redefine the future."</h1>
                        <p className='text-white'>Register your <strong>NEW HOUSE </strong>here  <img src={hand} alt=''/></p>
                        <Link to="" className="thm-gr-btn">Register</Link>
                       
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='banner-img'>
                        <img src={bannerimg} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Welcome