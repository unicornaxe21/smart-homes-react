/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import TreeView from 'react-accessible-treeview'
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
                <div className='col-lg-4 col-md-12 col-sm-12'>
                    <div className='tree-set'>
                        <div className="accordion" id="outerAccordion">
                            {/* First Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                >
                                <span class="main-switch">Home <i class="fas fa-chevron-down ms-5"></i></span>
                                <Link to="" class="btn btn-success btn-sm rounded-circle ms-3"><i class="fas fa-plus"></i></Link>
                                <Link to="" class="btn btn-danger btn-sm rounded-circle ms-3"><i class="fas fa-trash-alt"></i></Link>
                                </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#outerAccordion"
                                    >
                                    <div className="accordion-body">
                                        {/* Nested Accordion */}
                                        <div className="accordion" id="innerAccordion">
                                            {/* First Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNestedOne" aria-expanded="true" aria-controls="collapseNestedOne"
                                                > <span class="board">1. Switch Board - 1 <i class="fas fa-chevron-down ms-5"></i></span>
                                                <Link to="void(0);" class="btn btn-success btn-sm rounded-circle ms-3"><i class="fas fa-plus"></i></Link>
                                                <Link to="void(0);" class="btn btn-danger btn-sm rounded-circle ms-3"><i class="fas fa-trash-alt"></i></Link>
                                                </button>
                                                </h2>
                                                <div id="collapseNestedOne" className="accordion-collapse collapse show" aria-labelledby="headingNestedOne" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Second Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNestedTwo" aria-expanded="false" aria-controls="collapseNestedTwo"
                                                > <span class="board">2. Switch Board - 2 <i class="fas fa-chevron-down ms-5"></i></span>
                                                </button>
                                                </h2>
                                                <div id="collapseNestedTwo" className="accordion-collapse collapse" aria-labelledby="headingNestedTwo" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Third Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNestedThree" aria-expanded="false" aria-controls="collapseNestedThree"
                                                > <span class="board">3.Switch Board - 3<i class="fas fa-chevron-down ms-5"></i></span>
                                                </button>
                                                </h2>
                                                <div id="collapseNestedThree" className="accordion-collapse collapse" aria-labelledby="headingNestedTwo" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Nested Accordion */}
                                    </div>
                                </div>
                            </div>
                            {/* Second Accordion Item (Add more as needed) */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                                >
                                <span class="main-switch">Balcony <i class="fas fa-chevron-down ms-5"></i></span>
                                <Link to="void(0);" class="btn btn-success btn-sm rounded-circle ms-3"><i class="fas fa-plus"></i></Link>
                                <Link to="void(0);" class="btn btn-danger btn-sm rounded-circle ms-3"><i class="fas fa-trash-alt"></i></Link>
                                </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#outerAccordion"
                                    >
                                    <div className="accordion-body">
                                        {/* Nested Accordion */}
                                        <div className="accordion" id="innerAccordion">
                                            {/* First Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-01" aria-expanded="true" aria-controls="collapse-01"
                                                > <span class="board">1. Switch Board - 1 <i class="fas fa-chevron-down ms-5"></i></span>
                                                <Link to="void(0);" class="btn btn-success btn-sm rounded-circle ms-3"><i class="fas fa-plus"></i></Link>
                                                <Link to="void(0);" class="btn btn-danger btn-sm rounded-circle ms-3"><i class="fas fa-trash-alt"></i></Link>
                                                </button>
                                                </h2>
                                                <div id="collapse-01" className="accordion-collapse collapse" aria-labelledby="headingNestedOne" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Second Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-02" aria-expanded="false" aria-controls="collapse-02"
                                                > <span class="board">2. Switch Board - 2 <i class="fas fa-chevron-down ms-5"></i></span>
                                                </button>
                                                </h2>
                                                <div id="collapse-02" className="accordion-collapse collapse" aria-labelledby="headingNestedTwo" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Third Nested Accordion Item */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNestedTwo">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-03" aria-expanded="false" aria-controls="collapse-03"
                                                > <span class="board">3.Switch Board - 3<i class="fas fa-chevron-down ms-5"></i></span>
                                                </button>
                                                </h2>
                                                <div id="collapse-03" className="accordion-collapse collapse" aria-labelledby="headingNestedTwo" data-bs-parent="#innerAccordion" >
                                                    <div className="accordion-body">
                                                        <span class="switch on">TV</span>
                                                        <span class="switch off">Fan</span>
                                                        <span class="switch process">Port</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Nested Accordion */}
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }
    export default Flat01