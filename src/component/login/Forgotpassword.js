import React from 'react'
import Loginheader from './Loginheader'

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
                    <button className='thm-blu-btn text-white' type='button'> Continue</button>
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