import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import visitorimg from '../../assets/images/visitor-img.jpg'

function Visitorlist() {
  return (
    <>
    <Header />
    <section className='main-wrapper'>
   <Sidebar />
   <div className='profile-bar pt-0 mt-5 pe-0 ps-4'>
      <div className='row'>
         <div className='col-lg-9'>
            <div className='visitor-frm mt-3'>
               <form >
                  <div className='row align-items-center'>
                     <div className='col-lg-10'>
                        <div className='row visitor-frm-innr'>
                           <div className='col-3 frm-bx'>
                              <label>Date</label>
                              <input type='text' className='form-control'></input>
                           </div>
                           <div className='col-3 frm-bx'>
                              <label>TO</label>
                              <input type='text' className='form-control'></input>
                           </div>
                           <div className='col-3 frm-bx'>
                              <label>Time: </label>
                              <input type='text' className='form-control'></input>
                           </div>
                           <div className='col-3 frm-bx'>
                              <label>TO: </label>
                              <input type='text' className='form-control'></input>
                           </div>
                        </div>
                     </div>
                     <div className='col-lg-2'>
                        <button type='button'><i class="fas fa-search me-2"></i>Search</button>
                     </div>
                  </div>
               </form>
            </div>
            <h4 className='head mb-5'>Recent Visitors Photos (10):</h4>
            <ul className='visitor-list'>
               <li>
                  <div className='visitor-list-img'>
                     <img src={visitorimg} alt='' />
                  </div>
                  <div className='visitor-list-content'>
                     <h4>Lorem ipsum</h4>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
               </li>
               <li>
                  <div className='visitor-list-img'>
                     <img src={visitorimg} alt='' />
                  </div>
                  <div className='visitor-list-content'>
                     <h4>Lorem ipsum</h4>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
               </li>
               <li>
                  <div className='visitor-list-img'>
                     <img src={visitorimg   } alt='' />
                  </div>
                  <div className='visitor-list-content'>
                     <h4>Lorem ipsum</h4>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
               </li>    
            </ul>
         </div>
         <div className='col-lg-3'>
            <div className='visitor-dtl'>
                <h4 className='head'>Visitor Details:</h4>
                <img src={visitorimg} alt='' />
                <h4>Lorem ipsum</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}

export default Visitorlist