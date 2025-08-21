import React from 'react'

export default function Project() {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center py-4'>
        <h1 className='text-2xl sm:text-4xl  '>Projects</h1>
        <ul className='border px-4 py-4 ' style={{lineHeight:"23px"}}>
          <li>🐼 <a href="#" className='tracking-wider text-base' target="_blank">freeCodeCamp Responsive Web Design Website</a></li>
          <li>🐼 <a href="#" className='tracking-wider text-base' target="_blank">Javascript To Do List</a></li>
          <li>🐼 <a href="#" className='tracking-wider text-base' target="_blank">Phone-Book-Directory-Management-System using Java</a></li>
          <li>🐼 <a href="#" className='tracking-wider text-base' target="_blank">Javascript System Time Clock</a></li>
          <li>🐼 <a href="#" className='tracking-wider text-base' target="_blank">Highway Cattle Detection Projectk</a></li>
        </ul>
      </div>
    </div>
  )
}
