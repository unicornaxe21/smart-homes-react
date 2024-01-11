import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Loginheader from './Loginheader'

function Otp() {
  return (
    <>
    <section className='login-sec'>
<div className='row justify-content-center'>
    <Loginheader />
    <div className='col-lg-7 col-md-12 col-sm-12'>
        <div className='login-lft create'>
            <h4><span>OTP Verification</span></h4>
            <form>
                <div className='mb-3'>
                    <label for="" className='form-label'>Email</label>
                    <input type='email' className='form-control' /> 
                </div>
                <div className='row otp_box '>
                    <div className='col-lg-4'>
                    <label for="" className='form-label'>Enter OTP:</label>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 text-center mb-4'>
                    <button className='thm-blu-btn text-white'> Resend OTP</button>
                    </div>
                </div>
                <div className='mb-3'>
                    <label for="" className='form-label'>Phone Number</label>
                    <input type='number' className='form-control' /> 
                </div>
                <div className='row otp_box '>
                    <div className='col-lg-4'>
                    <label for="" className='form-label'>Enter OTP:</label>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                            <div className='col-lg-2 mb-3'>
                                <input type='number' className='form-control' /> 
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 text-center mb-4'>
                    <button className='thm-blu-btn text-white'> Resend OTP</button>
                    </div>
                </div>
                <div className='text-end mt-4'>
                    {/* <button className='thm-blu-btn text-white'> Next</button> */}
                    <Link to='/confirm-otp' className='thm-blu-btn text-white'> Next</Link>
                </div>
            </form>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Otp