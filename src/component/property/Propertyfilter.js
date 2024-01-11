import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Propertyfilter() {
  return (
    <>
    <div className='property-filter-frm '>
   <Link to="/amenities">
   Create New Folder </Link>
   <Link to="">
   <i class="fas fa-plus me-2"></i>Add a House</Link>
</div>
<div className='property-filter-frm-innr mt-4'>
   <form>
      <div className='property-filter-bx'>
         <input type='text' className='form-control' placeholder='Search' />
         <button type='button'><i class="fas fa-filter"></i></button>
      </div>
   </form>
</div>
    </>
  )
}

export default Propertyfilter