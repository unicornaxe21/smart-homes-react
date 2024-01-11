import React from 'react'
import Propertyheader from './Propertyheader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import flag01 from '../../assets/images/flag-01.png'
import flag02 from '../../assets/images/flag-02.png'
import flag03 from '../../assets/images/flag-03.png'
import flag04 from '../../assets/images/flag-04.png'
import Propertyfilter from './Propertyfilter'

function Selectcountry() {
  return (
    <>
        <Propertyheader />
        <section className='property-filter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='property-filter-content'>
                            <h2>Select a Country</h2>
                            <p>Select a country to edit, view and open houses in that country</p>
                        </div>
                    </div>
                    <div className='col-lg-4 text-end'>
                        <Propertyfilter />
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='property-select'>
                        <ul>
                            <li>
                                <img src={flag01} className='flag-img' alt='' />
                                <span className='cntry-nam'>1. AMERICA</span>
                            </li>
                            <li>
                                <img src={flag02} className='flag-img' alt='' />
                                <span className='cntry-nam'>2. AUSTRALIA</span>
                            </li>
                            <li>
                                <img src={flag03} className='flag-img' alt='' /> <i className="fas fa-chevron-down ms-4"></i>
                                <span className='cntry-nam'>2. INDIA</span>
                                <h6>1. Agra <i className="fas fa-chevron-down"></i></h6>
                                <div className='mt-4 mb-4'>
                                <h5>1. Alekya Appartments -1</h5>
                                <h5>2. Alekya Appartments -2</h5>
                                <h5>3. Alekya Individual House</h5>
                                <h5>4. Alekya Nilayam</h5>
                                </div>

                                <h6>2. Bangalore <i className="fas fa-chevron-down"></i></h6>
                                <h6>3. Gwalior <i className="fas fa-chevron-down"></i></h6>
                                <h6>4. Madurai <i className="fas fa-chevron-down"></i></h6>
                                <h6>5. Mangaluru <i className="fas fa-chevron-down"></i></h6>
                                <h6>6. Tirupathi <i className="fas fa-chevron-down"></i></h6>
                                <h6>7. Ujjain <i className="fas fa-chevron-down"></i></h6>
                                <h6>8. Varanasi <i className="fas fa-chevron-down"></i></h6>
                            </li>
                            <li>
                                <img src={flag04} className='flag-img' alt='' />
                                <span className='cntry-nam'>4. U.K.</span>
                            </li>
                        </ul>  

                        </div> 
                        <div className='bottom-btn text-end'>
                            <Link to="/house" className="thm-blu-btn">Next</Link>
                            </div>           
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Selectcountry