import React from 'react'
import Mainheader from './Mainheader'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Mainhome() {
  return (
    <>
    <Mainheader />
    <section className='apliance'>
        <div className='container-fluid'>
            <div className='apliance-bnnr'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <div className='apliance-bnnr-cntnt'>
                            <h5>Hello Everyone 👋</h5>
                            <h1>Get full control of your appliances by enjoying convenience with us.</h1>
                            <p>We are a platform, which has services so that it can help you with operating and securing your home from anywhere, anytime</p>
                            <div className='apliance-btn'>
                                <Link to="">Go to dashboard</Link>
                                <Link to=""><i class="far fa-play-circle me-2"></i>Watch Demo</Link>
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

export default Mainhome