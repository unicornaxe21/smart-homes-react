import React from 'react'
import Propertyheader from './Propertyheader'
import Propertyfilter from './Propertyfilter'
import houseimg from '../../assets/images/house-01.png'
import houseimg02 from '../../assets/images/house-02.png'
import houseimg03 from '../../assets/images/house-03.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function House() {
  return (
    <>
    <Propertyheader />
    <section className='property-filter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='property-filter-content'>
                            <h2>Select a House</h2>
                            <p>Select a house to edit, view and open its dashboard.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 text-end'>
                        <Propertyfilter />
                    </div>
                    <div className='col-lg-12 mt-5'>
                        <h4 className='head text-white text-uppercase'>INDIA</h4>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Link to="/property-detail">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Alekya Apartment -1</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Link to="/property-detail">
                        <div className='house-innr'>
                            <img src={houseimg} alt='' />
                            <h4 className='text-center'>Alekya Apartment -1</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Link to="/property-detail">
                        <div className='house-innr'>
                            <img src={houseimg02} alt='' />
                            <h4 className='text-center'>Alekya Apartment -1</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <Link to="/property-detail">
                        <div className='house-innr'>
                            <img src={houseimg03} alt='' />
                            <h4 className='text-center'>Alekya Apartment -1</h4>
                        </div>
                        </Link>
                    </div>
                    <div className='col-lg-12 text-end'>
                       <Link to="/flat" className="thm-blu-btn text-white">Next</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default House