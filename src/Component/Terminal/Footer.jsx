import React from 'react'

function Footer({height, onMouseDown}) {
    // bg-black text-white text-center py-4 border-t border-white
    return (
        <div style={{ height }} className='relative bg-black text-white text-center py-4 border-t border-white'>

            <div
                onMouseDown={onMouseDown}
                className='absolute top-0 left-0 right-0 h-2 hover:bg-blue-800  cursor-row-resize duration-500 transition-all'
            ></div>
            <footer className="text-center py-4 ">

                <p className="text-sm">&copy; 2025 Your Name or Company — All Rights Reserved</p>
            </footer>
        </div>



    )
}

export default Footer
