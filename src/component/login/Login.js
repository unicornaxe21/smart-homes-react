import React from 'react'
import loginimg from '../../assets/images/login-img.png'
import googleicon from '../../assets/images/google-icon.png'
import scanner from '../../assets/images/scanner.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'



function Login() {
  return (
    <>
    <section className='login-sec'>
        <div className='row justify-content-center'>
            <div className='col-lg-7 col-md-12 col-sm-12'>
                <div className='brand-logo'>
                    <a href="/">
                        <img src={logo} alt=''></img>
                    </a>
                </div>
                <div className='login-lft'>
                    <h2 className='text-white'>Login Here</h2>
                    <div className='login-btn text-center'>
                        <a href="javascript()" className='login-btn-lnk'> <img src ={googleicon} className='me-2' alt='' /> Sign in with Google</a>
                        <a href="javascript()" className='login-btn-lnk'> <img src ={scanner} className='me-2' alt=''/> Sign in with QR CODE</a>
                    </div>
                    <h5 className='text-center'><span>Or Sign in with Email</span></h5>
                    <form>
                        <div className='mb-4'>
                            <label for="" className='form-label'>Email</label>
                            <input type='email' className='form-control' /> 
                        </div>
                        <div className='mb-4'>
                            <label for="" className='form-label'>Enter your Password </label>
                            <input type='password' className='form-control' /> 
                        </div>
                        <div className='d-flex justify-content-between login-lnk mb-3'>
                            <Link to="/create-account">Create Account</Link>
                            <Link to="/forgot-password">Forgot Password ?</Link>
                        </div>
                        <div className='d-flex justify-content-between login-lnk mb-3'>
                            <div>
                            <input type='checkbox' id='myid' className='me-2'/>
                            <label for='myid'>Remember my ID</label>
                            </div>
                            <Link to="/congralution">Find my ID</Link>
                        </div>
                        <div className='d-flex justify-content-between login-lnk mb-3'>
                            <div><input type='checkbox' id='terms' className='me-2'/>
                            <label for='terms'>Agree to <strong> Terms & <br />Conditions</strong></label></div>
                        </div>
                        <div className='text-center'>
                            {/* <button className='thm-gr-btn'>Continue</button> */}
                            <Link to="/amenities" className='thm-gr-btn'>Continue</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-lg-5 text-end d-none d-lg-block'>
            <img src={loginimg} alt="loginimg"  className='w-100 h-100'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login