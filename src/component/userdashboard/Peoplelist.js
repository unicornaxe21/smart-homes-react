/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import userimg from '../../assets/images/user-icon.png'

function Peoplelist() {
  return (
    <>
    <Header />
    <section className='main-wrapper'>
        <Sidebar />
        <div className='profile-bar'>
            <h4 className='head'>People</h4>
            <div className='row'>
                <div className='col-lg-8 col-md-12 col-sm-12'>
                    <div className='userlist'>
                        <div className='userlist-img'>
                            <img src={userimg} alt='' />
                            <h5>Person-1</h5>
                        </div>
                        <div className='userlist-content'>
                            <h3>lorem ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className='userlist-lnk'>
                            <a href="#">can edit <i className="fas fa-chevron-up ms-2"></i></a>
                        </div>
                    </div>
                    <div className='userlist'>
                        <div className='userlist-img'>
                            <img src={userimg} alt='' />
                            <h5>Person-2</h5>
                        </div>
                        <div className='userlist-content'>
                            <h3>lorem ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className='userlist-lnk'>
                            <a href="#">can edit <i className="fas fa-chevron-up ms-2"></i></a>
                        </div>
                    </div>
                    <div className='userlist'>
                        <div className='userlist-img'>
                            <img src={userimg} alt='' />
                            <h5>Person-3</h5>
                        </div>
                        <div className='userlist-content'>
                            <h3>lorem ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className='userlist-lnk'>
                            <a href="#">can edit <i className="fas fa-chevron-up ms-2"></i></a>
                        </div>
                    </div>
                    <div className='userlist'>
                        <div className='userlist-img'>
                            <img src={userimg} alt='' />
                            <h5>Person-4</h5>
                        </div>
                        <div className='userlist-content'>
                            <h3>lorem ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className='userlist-lnk'>
                            <a href="#">can edit <i className="fas fa-chevron-up ms-2"></i></a>
                        </div>
                    </div>
                    <div className='userlist'>
                        <div className='userlist-img'>
                            <img src={userimg} alt='' />
                            <h5>Person-5</h5>
                        </div>
                        <div className='userlist-content'>
                            <h3>lorem ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                        <div className='userlist-lnk'>
                            <a href="#" className='orng'>can edit <i className="fas fa-chevron-up ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Peoplelist