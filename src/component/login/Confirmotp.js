import React from 'react'

import check from '../../assets/images/check.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Loginheader from './Loginheader'

function Confirmotp() {
  return (
    <>
<section className='login-sec'>
<div className='row justify-content-center'>
    <Loginheader />
    <div className='col-lg-7 col-md-12 col-sm-12'>
        <div className='login-lft create'>
            <h4><span>OTP Verification</span></h4>
            <form>
                <form>
                    <div className='row'>
                        <div className='col-lg-6 mb-4'>
                            <label className='form-label'>Email: </label>
                        </div>
                        <div className='col-lg-6 mb-4'>
                            <img src={check} className='check' alt='' />
                        </div>
                        <div className='col-lg-8 mb-4'>
                            <label className='form-label'>Phone Number:</label>
                        </div>
                        <div className='col-lg-4 mb-4'>
                            <img src={check} className='check' alt='' />
                        </div>
                        <div className='col-lg-12 mb-4'>
                        <div className='text-end mt-4'>
                    {/* <button className='thm-blu-btn text-white'> Next</button> */}
                    
                    <Link to='/register-success' className='thm-blu-btn text-white'> Next</Link>
                </div>
                        </div>
                    </div>
                </form>
                
            </form>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Confirmotp