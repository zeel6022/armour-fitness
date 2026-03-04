import React from 'react'
import cleb from '../assets/armour/celebration.svg'
import arrow from '../assets/armour/arrow.svg'
import verified from '../assets/armour/verified.png'

const Home = () => {
    return (
        <div className='cursor-default home_container flex flex-col items-center  min-h-screen lg:mb-[-180px]'>
           
            <div className="subscription_plans flex flex-col md:flex-row gap-8 md:gap-6 w-full max-w-6xl justify-center items-center px-2">
                {/* Card 1 */}
                <div className="card1 bg-gradient-to-br from-[rgb(1,152,227)] via-[rgb(1,227,212)] via-[rgb(27,253,6)] via-[rgb(174,227,1)] via-[rgb(227,133,1)] via-[rgb(242,130,3)] to-[rgb(0,100,0)] p-1 rounded-2xl transition-transform duration-300 hover:scale-105 w-full max-w-xs">
                    <div className="item bg-black flex flex-col justify-center text-center items-center rounded-2xl p-3">
                        <span className='text-blue-400 flex flex-row justify-center items-center gap-2'>
                            <img src={cleb} className='w-[15px] h-[15px] inline' alt="" /> On Sale Now!
                        </span>
                        <h3 className='text-2xl md:text-4xl mt-6 md:mt-10'>Armour Elite Pass</h3>
                        <p className='text-slate-400 mt-4 text-sm md:text-base'>Unlimited access to group classes , all gyms <br /> and all-home workouts.</p>
                        <span className="dummy line-through text-blue-500 text-xl md:text-2xl mt-5">$90</span>
                        <span className="price text-3xl md:text-5xl font-bold">$40</span>
                        <span className="duration text-slate-400 text-xs md:text-base">per month, paid annually</span>
                        <div className="discount flex flex-row justify-center items-center">
                            <span className="savings bg-[rgba(255,140,78,0.22)] text-[rgb(255,154,39)] rounded-2xl pl-2 pr-2 inline">50% Savings </span>
                            <img src={arrow} className='w-[30px] mb-4 h-[30px] inline' alt="" />
                        </div>
                        <button onClick={() => alert("buy now")} className='cursor-pointer mt-5 bg-blue-600 text-white uppercase rounded-2xl m-2 p-2 pl-3 pr-3 text-xs md:text-base'>Claim Discount</button>
                        <div className="services self-start text-start">
                            <ul>
                                <li className='cursor-default'><img src={verified} className='mb-3 mt-3 mr-2 w-[20px] h-[20px] inline' alt="" />At-center group classes </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />All ELITE & PRO gyms </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />At-home live workouts </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card2 bg-gradient-to-br from-[rgb(1,152,227)] via-[rgb(1,227,212)] via-[rgb(27,253,6)] via-[rgb(174,227,1)] via-[rgb(227,133,1)] via-[rgb(242,130,3)] to-[rgb(0,100,0)] p-1 rounded-2xl transition-transform duration-300 hover:scale-105 w-full max-w-xs">
                    <div className="item2 bg-black flex flex-col justify-center text-center items-center rounded-2xl p-3">
                        <span className='text-blue-400 flex flex-row justify-center items-center gap-2'>
                            <img src={cleb} className='w-[15px] h-[15px] inline' alt="" /> On Sale Now!
                        </span>
                        <h3 className='text-2xl md:text-4xl mt-6 md:mt-10'>Armour Pro Pass</h3>
                        <p className='text-slate-400 mt-4 text-sm md:text-base'>Unlimited access to all pro gyms <br />and at-home workouts</p>
                        <span className="dummy line-through text-blue-500 text-xl md:text-2xl mt-5">$150</span>
                        <span className="price text-3xl md:text-5xl font-bold">$90</span>
                        <span className="duration text-slate-400 text-xs md:text-base">per month, paid annually</span>
                        <div className="discount flex flex-row justify-center items-center">
                            <span className="savings bg-[rgba(255,140,78,0.22)] text-[rgb(255,154,39)] rounded-2xl pl-2 pr-2 inline">50% Savings </span>
                            <img src={arrow} className='w-[30px] mb-4 h-[30px] inline' alt="" />
                        </div>
                        <button onClick={() => alert("buy now")} className='cursor-pointer mt-5 bg-blue-600 text-white uppercase rounded-2xl m-2 p-2 pl-3 pr-3 text-xs md:text-base'>Claim Discount</button>
                        <div className="services self-start text-start">
                            <ul>
                                <li className='cursor-default'><img src={verified} className='mb-3 mt-3 mr-2 w-[20px] h-[20px] inline' alt="" />All pro gyms </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />2 sessions/month at ELITE gyms <br />  & group classes </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />Designed program just for you </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card3 bg-gradient-to-br from-[rgb(1,152,227)] via-[rgb(1,227,212)] via-[rgb(27,253,6)] via-[rgb(174,227,1)] via-[rgb(227,133,1)] via-[rgb(242,130,3)] to-[rgb(0,100,0)] p-1 rounded-2xl transition-transform duration-300 hover:scale-105 w-full max-w-xs">
                    <div className="item3 bg-black flex flex-col justify-center text-center items-center rounded-2xl p-3">
                        <span className='text-blue-400 flex flex-row justify-center items-center gap-2'>
                            <img src={cleb} className='w-[15px] h-[15px] inline' alt="" /> On Sale Now!
                        </span>
                        <h3 className='text-2xl md:text-4xl mt-6 md:mt-10'>Armour Home Pass</h3>
                        <p className='text-slate-400 mt-4 text-sm md:text-base'>Unlimited access at home workouts with<br /> calories tracking </p>
                        <span className="dummy line-through text-blue-500 text-xl md:text-2xl mt-5">$50</span>
                        <span className="price text-3xl md:text-5xl font-bold">$20</span>
                        <span className="duration text-slate-400 text-xs md:text-base">per month, paid annually</span>
                        <div className="discount flex flex-row justify-center items-center">
                            <span className="savings bg-[rgba(255,140,78,0.22)] text-[rgb(255,154,39)] rounded-2xl pl-1 pr-2 inline">50% Savings </span>
                            <img src={arrow} className='w-[30px] mb-4 h-[30px] inline' alt="" />
                        </div>
                        <button onClick={() => alert("buy now")} className='cursor-pointer mt-5 bg-blue-600 text-white uppercase rounded-2xl m-2 p-2 pl-3 pr-3 text-xs md:text-base'>Claim Discount</button>
                        <div className="services self-start text-start">
                            <ul>
                                <li className='cursor-default'><img src={verified} className='mb-3 mt-3 mr-2 w-[20px] h-[20px] inline' alt="" />At home workouts </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />celebrity workouts </li>
                                <li className='cursor-default'><img src={verified} className='mb-3 mr-2 w-[20px] h-[20px] inline' alt="" />Global-based workouts and <br /> meditation sessions </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
