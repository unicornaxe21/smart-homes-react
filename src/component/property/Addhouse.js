import React from 'react'
import Propertyheader from './Propertyheader'
import voice from '../../assets/images/user-voice.png'

function Addhouse() {
  return (
    <>
    <Propertyheader />
    <section className='add-property'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='add-property-lft'>
                        <h5>Voice Request Details: <span>For Apartments </span></h5>
                        <div className='speech-bx'>
                            <button className='speech-icon'><img src={voice} alt='' /></button>
                            <input type='text' className='form-control' placeholder='Speech to text request ' />
                            <button className='thm-blu-btn text-white'>Send</button>
                        </div>
                        <p className='text-white'><em>Note: Enter the details mentioned below in speech to text format in the above column.</em></p>
                        <h5>Fill the Details Manually: <span>For Apartments </span></h5>
                    </div>
                   <div className='add-property-lft-innr'>
                   <form >
                        <div className='row align-items-center'>
                            <div className='col-lg-4 mb-3'>
                                <label>Country Name:</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter country name' />
                            </div>

                            <div className='col-lg-4 mb-3'>
                                <label>Pin code: </label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter Pin code number ' />
                            </div>

                            <div className='col-lg-4 mb-3'>
                                <label>House Name:</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter your house name' />
                            </div>

                            <div className='col-lg-4 mb-3'>
                                <label>House No.:</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter your house number' />
                            </div>
                            <div className='col-lg-4 mb-3'>
                                <label>Floor No.:</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter the floor number' />
                            </div>

                            <div className='col-lg-4 mb-3'>
                                <label>Flat No.:</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter your flat number ' />
                            </div>

                            <div className='col-lg-4 mb-3'>
                                <label>Rooms :</label>
                            </div>
                            <div className='col-lg-8 mb-3'>
                                <input type='text' className="form-control" placeholder='Enter total number of rooms in the flat' />
                            </div>
                        </div>
                    </form>
                   </div>
                </div>
                <div className='col-lg-5'>
                <div className='propery-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456454.5774335932!2d76.04681361573485!3d26.646837120404587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704792841372!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="property_map"></iframe>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Addhouse