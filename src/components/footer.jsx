import React from 'react'
import react from '../assets/react.svg'


const footer = () => {
  return (
    <div>
        <div className="footer_container flex flex-row justify-around w-[100%] pt-10 ">
            <div className="footer_sec1 ">
                <img src={react} alt="react" className='w-[20px] h-[20px]' />
                <span>REACT</span>

            </div>
            <div className="footer_links grid grid-cols-3 gap-10">
                <div className="resources"><ul><li className='cursor-pointer'>blogs</li><li className='cursor-pointer'>contact</li></ul></div>
                <div className="resources"><ul><li className='cursor-pointer'>blogs</li><li className='cursor-pointer'>contact</li></ul></div>
                <div className="resources"><ul><li className='cursor-pointer'>blogs</li><li className='cursor-pointer'>contact</li></ul></div>
            </div>
        </div>
    </div>
  )
}

export default footer       