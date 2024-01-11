import React from 'react'
import Loginheader from './Loginheader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Forgotpassword() {
  return (
    <>
    <section className='login-sec'>
<div className='row justify-content-center'>
    <Loginheader />
    <div className='col-lg-7'>
        <h4 className='head text-white'>Enter your login details to <br /> register your house details:</h4>
        <div className='login-lft'>
        <form>
                <div className='mb-5'>
                    <label for="" className='form-label'>Enter Email:</label>
                    <input type='email' className='form-control' placeholder='XYZ@gmail.com' /> 
                </div>
               
                <div className='mb-5'>
                    <label for="" className='form-label'>Enter Password:</label>
                    <input type='password' className='form-control' placeholder='' /> 
                </div>
             
                <div className='text-end mt-4'>
                    <Link to="/verification-home" className='thm-blu-btn text-white'>Continue</Link>
                </div>
            </form>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Forgotpassword