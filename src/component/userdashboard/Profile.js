/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import userimg from '../../assets/images/user-img.png'


function Profile() {
  return (
    <>
 
      <Header></Header>
        <section className='main-wrapper'>
         <Sidebar></Sidebar>
         <div className='profile-bar'>
          <div className='row align-items-center'>
            <div className='col-lg-8'>
              <div className='profile-bar-img'>
              <span className='upload-profile'>
                <img src={userimg} alt=''/>
              </span>
              <h6>Upload your photo</h6>
              </div>
            </div>
            <div className='col-lg-4 text-end'>
              <div className='upload-img'>
                <input type='file' id='upload-img' /> 
                <label for="upload-img">Upload</label>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='profile-form'>
                <form>
                  <div className='row justify-content-between'>
                    <div className='col-lg-3 mb-4'>
                      <label>User name</label>
                      <input type='text' className='form-control' /> 
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <label>Full Name</label>
                      <input type='text' className='form-control' /> 
                    </div>
                  </div>
                  <div className='row justify-content-between'>
                    <div className='col-lg-3 mb-4'>
                      <label>Email Address</label>
                      <input type='email' className='form-control' /> 
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <label>Contact Number</label>
                      <input type='number' className='form-control' /> 
                    </div>
                    <div className='col-lg-12 mb-4'>
                      <label>Address</label>
                      <textarea className='form-control' ></textarea>
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <label>City</label>
                      <input type='text' className='form-control' /> 
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <label>State/ Province</label>
                      <input type='text' className='form-control' /> 
                    </div>
                  </div>
                  <div className='row justify-content-between'>
                    <div className='col-lg-3 mb-4'>
                      <label>Zip Code</label>
                      <input type='text' className='form-control' /> 
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <label>Country</label>
                      <input type='text' className='form-control' /> 
                    </div>
                    <div className='col-lg-12 mb-4'>
                      <label>Bio</label>
                      <textarea className='form-control' ></textarea>
                    </div>
                    <div className='col-lg-12 mb-4'>
                      <button type='button' >Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
         </div>
        </section>
    </>
  )
}

export default Profile