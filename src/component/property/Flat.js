import React from 'react'
import Propertyheader from './Propertyheader'
import Propertyfilter from './Propertyfilter'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import houseimg from '../../assets/images/house-01.png'

function Flat() {
  return (
    <>
        <Propertyheader />
        <section className='property-filter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='property-filter-content'>
                            <h2>Select a Flat</h2>
                            <p>Select a house to edit, view and open its dashboard.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 text-end'>
                        <Propertyfilter />
                    </div>
                    <div className='col-lg-12 mt-5'>
                        <h4 className='head text-white text-uppercase'>INDIA</h4>
                        <h6 className='text-white'>Alekhya Apartments - 1</h6>
                    </div>
                    <div className='col-lg-12'>
                        <h5 className='head text-white mt-4'>Floor - 1</h5>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 101</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 102</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 103</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 104</h4>
                        </div>
                        </Link>
                    </div>
                    <hr></hr>
                    <div className='col-lg-12'>
                        <h5 className='head text-white mt-4'>Floor - 2</h5>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 201</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 202</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 203</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 204</h4>
                        </div>
                        </Link>
                    </div>
                    <hr></hr>
                    <div className='col-lg-12'>
                        <h5 className='head text-white mt-4'>Floor - 3</h5>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 301</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 302</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 303</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6'>
                        <Link to="">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Flat - 304</h4>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Flat