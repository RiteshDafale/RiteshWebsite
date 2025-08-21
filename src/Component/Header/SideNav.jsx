import React from 'react';

function SideNav({ onSelect}) {
  return (
    <div className="flex"> {/* flex container for side-by-side */}
      {/* Icon sidebar */}
      <aside className="bg-black h-screen px-0 py-4 sm:w-full  md:w-[5vw] lg:w-[5vw] w-[12vw] border-2 border-white flex justify-center">
        <nav className="flex flex-col gap-4">
          <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
            <i className="fa-solid fa-envelope text-white text-3xl hover:text-5xl"
            onClick={()=>{window.location.href="ritesh.dafale13@gmail.com"}}
            ></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
            <i className="fa-brands fa-linkedin text-white text-3xl hover:text-5xl"
              onClick={()=>{window.location.href="https://www.linkedin.com/in/riteshdafale/"}}
            ></i>
          </div>
          <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
            <i className="fa-brands fa-github text-white text-3xl hover:text-5xl"
            onClick={()=>{window.location.href="https://github.com/RiteshDafale"}}
            ></i>
          </div>
        </nav>
      </aside>

       <aside className="bg-black text-white h-screen px-4 py-6 w-[12vw] border-2 border-white">
      <nav className="flex flex-col gap-6 text-sm font-medium">
        {["Project", "Skills", "Certification", "Experience"].map((item) => (
          <div
            key={item}
            className="cursor-pointer hover:border-dotted hover:px-3   transition text-1xl hover:bg-gray-700 hover:rounded-2xl hover:w-full"
            onClick={() => onSelect(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </nav>
    </aside>
    </div>
  );
}

export default SideNav;
