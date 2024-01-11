import React from 'react'
import Loginheader from './login/Loginheader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Congralution() {
  return (
    <>
       <section className='login-sec'>
<div className='row justify-content-center'></div>
    <Loginheader />
    <div className='container'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='congra-innr'>
                    <h1 className='text-center text-white'>Congratulation!</h1>
                    <h6 className='text-center'>You house has been registered successfully. Manual verification and installation has to be done by our team. For more Information contact the support team. </h6>
                    <div className='text-center mt-5'>
                    <Link className="thm-blu-btn text-white">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Congralution