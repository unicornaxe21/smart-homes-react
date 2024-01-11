/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Flat01() {
  return (
    <>
        <Header />
        <section className='main-wrapper'>
            <Sidebar />
            <div className='profile-bar'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='bredcump-head'>
                        <h4>
                            <button><i class="fas fa-chevron-left"></i></button>
                            <span>Flats / Houses Floor -1</span>
                            <button><i class="fas fa-chevron-right"></i></button>
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-6 text-end'>
                        <ul className='bredcump-list'>
                            <li><a href='#' className='accpt'>Accepted</a></li>
                            <li><a href='#' className='prog'>Progress</a></li>
                            <li><a href='#' className='reject'>Rejected</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-7'>
                        <div className='treeview'>
                            <ul>
                                <li>
                                    <a href="" className='treeview-title'>Hall <i class="fas fa-chevron-down ms-5"></i></a>
                                    <h5>
                                       1. Switch Board - 1 <i class="fas fa-chevron-down ms-5"></i>
                                        <a href="" className='treeview-icon'><i class="fas fa-plus"></i></a>
                                        <a href="" className='treeview-icon trash'><i class="fas fa-trash-alt"></i></a>
                                    </h5>
                                    <h4>
                                        <span className='treeview-txt'>TV</span>
                                        <span className='treeview-dot accpt'></span>
                                    </h4>
                                    <h4>
                                        <span className='treeview-txt'>Fan</span>
                                        <span className='treeview-dot pndng'></span>
                                    </h4>
                                    <h4>
                                        <span className='treeview-txt'>Port</span>
                                        <span className='treeview-dot reject'></span>
                                    </h4>
                                    <h5>
                                       2. <span>Switch Board - 2 <i class="fas fa-chevron-down ms-5"></i></span>
                                    </h5>
                                    <h5>
                                       3. <span>Switch Board - 3 <i class="fas fa-chevron-down ms-5"></i></span>
                                    </h5>
                                </li>
                                <li>
                                <a href="" className='treeview-title'>Balcony <i class="fas fa-chevron-down ms-5"></i></a>
                                <a href="" className='treeview-icon'><i class="fas fa-plus"></i></a>
                                <a href="" className='treeview-icon trash'><i class="fas fa-trash-alt"></i></a>
                                </li>
                                <li>
                                <a href="" className='treeview-title'>Kitchen <i class="fas fa-chevron-down ms-5"></i></a>
                                <a href="" className='treeview-icon'><i class="fas fa-plus"></i></a>
                                <a href="" className='treeview-icon trash'><i class="fas fa-trash-alt"></i></a>
                                </li>
                                <li>
                                <a href="" className='treeview-title'>Pooja Room <i class="fas fa-chevron-down ms-5"></i></a>
                                <a href="" className='treeview-icon'><i class="fas fa-plus"></i></a>
                                <a href="" className='treeview-icon trash'><i class="fas fa-trash-alt"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Flat01