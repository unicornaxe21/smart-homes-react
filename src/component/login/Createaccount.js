import React from 'react'
import { Link } from 'react-router-dom'
import Loginheader from './Loginheader'

function Createaccount() {
  return (
    <>
<section className='login-sec'>
<div className='row justify-content-center'>
    <Loginheader />
    <div className='col-lg-7 col-md-12 col-sm-12'>
        <div className='login-lft create'>
            <h4><span>Create New Account</span></h4>
            <form>
                <div className='mb-2'>
                    <label for="" className='form-label'>Email</label>
                    <input type='email' className='form-control' /> 
                </div>
                <div className='mb-2'>
                    <label for="" className='form-label'>First Name</label>
                    <input type='text' className='form-control' /> 
                </div>
                <div className='mb-2'>
                    <label for="" className='form-label'>Last Name</label>
                    <input type='text' className='form-control' /> 
                </div>
                <div className='mb-2'>
                    <label for="" className='form-label'>Password</label>
                    <input type='password' className='form-control' /> 
                </div>
                <div className='mb-2'>
                    <label for="" className='form-label'>Confirm Password</label>
                    <input type='password' className='form-control' /> 
                </div>
                
                <div className='d-flex justify-content-between login-lnk mb-3'>
                    <div><input type='checkbox' id='remember' className='me-2'/>
                    <label for='terms'>Remember me</label></div>
                </div>
                <div className='text-center'>
                    {/* <button className='thm-blu-btn w-75'> Continue</button> */}
                    <Link to='/Otp' className='thm-blu-btn w-75'>Continue</Link>
                </div>
                <div className='mt-3'>
                <p className='text-white'>Already have an account?   <Link to="/"> Sign In</Link></p>
                </div>
            </form>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Createaccount