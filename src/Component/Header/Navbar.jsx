import React from 'react'
import { useState } from 'react';
import Project from '../Project/Project';

function Navbar({ onSelect }) {

  const mobileMenu = () => {
    const getId = document.getElementById("toggleMenu");
    if (getId.classList.contains("hidden")) {
      getId.classList.remove("hidden");
    }
    else {
      getId.classList.add("hidden");
    }
  }
  const [selectedOption, setselectedOption] = useState("");
  return (
    <div>
      <header className='flex justify-between items-center px-4 py-2 lg:px-0 border-2 border-white  z-10'>
        <nav className='hidden md:flex item-center gap-0 '>
          <div className='border py-2 px-2'>
            <a className='text-base tracking-wider hover:border sm:px-4  hover:border-dotted hover:border-blue-400 hover:cursor-pointer '
              onClick={(e) => {
                e.preventDefault();
                setselectedOption("Project")
                onSelect("Project")
              }}>Project.jsx</a>
          </div>
          <div className='border py-2 px-2'>
            <a className='text-base tracking-wider hover:border   hover:border-dotted hover:border-blue-400 hover:cursor-pointer'
              onClick={(e) => {
                e.preventDefault();
                setselectedOption("skills")
                onSelect("Skills")
              }}>Skills.jsx</a>.</div>
          <div className='border py-2 px-2'>
            <a className='text-base tracking-wider hover:border hover:border-dotted hover:border-blue-400 hover:cursor-pointer  ' onClick={(e) => {
              e.preventDefault();
              setselectedOption("Certification")
              onSelect("Certification")
            }}>Certification.jsx</a>
          </div>
          <div className='border-1 py-2 px-2'>
            <a className='text-base tracking-wider hover:border hover:border-dotted hover:border-blue-400 hover:cursor-pointer' onClick={(e) => {
              e.preventDefault();
              setselectedOption("Experience")
              onSelect("Experience")
            }}>Experience.jsx</a>
          </div>
        </nav>

        <div onClick={mobileMenu} className="toggle lg:hidden sm:block  md:hidden text-3xl p-2">
          <i class="fa-solid fa-bars"></i>
        </div>

        <div id="toggleMenu" className='hidden fixed top-16 bottom-0 left-0 right-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blue-md' >
          <nav className='flex flex-col  gap-6 items-center'>
            <a className='text-base tracking-wider hover:border sm:px-4  hover:border-dotted hover:border-blue-400 in-active:border-blue-500  ' href="">Project</a>
            <a className='text-base tracking-wider hover:border   hover:border-dotted hover:border-blue-400  ' href="">Skills</a>
            <a className='text-base tracking-wider hover:border hover:border-dotted hover:border-blue-400   ' href="">Certification</a>
            <a className='text-base tracking-wider hover:border   hover:border-dotted    hover:border-blue-400' href="">Experience</a>
          </nav>
        </div>



      </header>
    </div>
  )
}

export default Navbar
