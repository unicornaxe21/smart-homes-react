/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function Sidebar() {
  return (
    <>
   <aside className='sidebar sticky-top'>
   <ul className='sidebar-list'>
      <li>
         <a href="#">
         <span>Let’s set up your profile </span>
         <i class="fas fa-chevron-right"></i>
         </a>
         <hr className='line'>
         </hr>
         <em>100% completed</em>
      </li>
      <li>
         <Link to="/user-profile">
         <span>Profile</span>
         <i class="fas fa-chevron-right"></i>
         </Link>
      </li>
      <li>
         <a href="#">
         <span>Home  Page</span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <li>
         <Link to="/visitorlist">
         <span>Visitors List</span>
         <i class="fas fa-chevron-right"></i>
         </Link>
      </li>
      <li>
         <Link to="/people-list" >
         <span>People</span>
         <i class="fas fa-chevron-right"></i>
         </Link>
      </li>
      <hr>
      </hr>
      <li>
         <h4>House Profile</h4>
      </li>
      <li>
         <Link to="/flat-01">
         <span>Flat  - 101</span>
         <i class="fas fa-chevron-right"></i>
         </Link>
      </li>
      <li>
         <a href="#">
         <span>Flat  - 102</span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <li>
         <a href="#">
         <span>Flat  - 103</span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <hr>
      </hr>
      <li>
         <a href="#">
         <span>Edit </span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <li>
         <a href="#">
         <span>Contacts</span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <li>
         <a href="#">
         <span>Notifications</span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
      <li>
         <a href="#">
         <span>Settings </span>
         <i class="fas fa-chevron-right"></i>
         </a>
      </li>
   </ul>
</aside>
    </>
  )
}

export default Sidebar