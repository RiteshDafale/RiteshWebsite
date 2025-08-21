import React,{useEffect} from 'react'
import Navbar from '../Header/Navbar'
import SideNav from '../Header/SideNav'
import Project from '../Project/Project'
import { useState } from 'react'
import Certification from '../Certificate/Certificate';
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills';


import { useRef } from 'react'
import Footer from '../Terminal/Footer'

function Home() {

    const [selectedOption, setselectedOption] = useState("Project")
    const [terminalHeight , setterminalHeight] = useState(100);
    const isresizing  = useRef(false);


    const MouseDownClick = ()=>{
        isresizing.current = true;
         document.body.style.cursor='row-resize';
    }

    const MouseUpClick = ()=>{
        isresizing.current = false;
        document.body.style.cursor='default';
    }

    const MouseMoveEvent = (e)=>{
        if(!isresizing.current)  return ;
        const newHeight  = window.innerHeight - e.clientY;
          if (newHeight >= 50 && newHeight <= 400) { // limit size
      setterminalHeight(newHeight);
    }
    }

    useEffect(()=>{
        window.addEventListener('mousemove', MouseMoveEvent);
        window.addEventListener('mouseup',MouseUpClick);
        return () =>{
            window.removeEventListener('mousemove',MouseMoveEvent);
            window.removeEventListener('mouseup',MouseUpClick)
        }

    },)


    const DianamicRender = () => {
        switch (selectedOption) {
            case "Project":
                return <Project />;
            case "Skills":
                return <Skills />;
            case "Certification":
                return <Certification/>
            case "Experience":
                return <Experience />;

        }
    }
    return (
        <div>
            <div>
                <div className='flex h-screen  w-full'>
                    <SideNav onSelect={setselectedOption} />


                    <div className="flex-1 flex  flex-col  ">
                        <Navbar onSelect={setselectedOption} />

                       <main className='flex-1 p-4' >{DianamicRender()}</main>

                         {/* <Footer height={`${terminalHeight}px`} onMouseDown={MouseDownClick}/> 
                         */}
                         <Footer height={`${terminalHeight}px`} onMouseDown={MouseDownClick}/>
                        {/* <Project/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
