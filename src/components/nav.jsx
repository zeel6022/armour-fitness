import React from 'react'
import '../styles/nav.css'
import logo from '../assets/armour/logo.png'
import logo1 from '../assets/armour/logo-h.png'

const nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container w-[100%] flex justify-between">
                <div className="navbar-logo flex flex-row">
                    <img src={logo} alt="" className='w-[50px] h-[50px]' />
                    <img src={logo1} alt="" className='w-[200px] h-[50px]' />
                </div>
                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon">&#9776;</span>
                </button>
                <ul className={`navbar-menu${isOpen ? ' active' : ''}`} >
                    <li className="navbar-item"><a href="/">HOME</a></li>
                    <li className="navbar-item"><a href="/MEMBERSHIP">MEMBERSHIP</a></li>
                    <li className="navbar-item"><a href="/CLASS">CLASS</a></li>
                    <li className="navbar-item"><a href="/COACH">COACH</a></li>
                    <li className="navbar-item"><a href="/SHOP">SHOP</a></li>
                    <li className="navbar-item"><a href="/about">About</a></li>
                   <button className='cursor-pointer navbar-item book_now_btn bg-blue-400 text-white border-2 border-transparent rounded-2xl p-1 pl-4 pr-4 ' onClick={()=>alert("hello there!")}>BOOK NOW</button>
                </ul>
            </div>

        </nav>
    )
}

export default nav
