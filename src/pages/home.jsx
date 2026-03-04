import React from 'react'
import Subplan from '../components/subscriptions'
import heroimg from '../assets/armour/hero_image.jpg'
import '../styles/home.css'
import arrow from '../assets/armour/arrow.png'
import sec2img from '../assets/armour/secondsec_img.jpg'
import yoga from '../assets/armour/yoga.png'
import hit from '../assets/armour/hit.jpg'
import strength from '../assets/armour/strength.avif'
import cardio from '../assets/armour/cardio.avif'
// import Sec5 from '../components/sec5'
import sarrow from '../assets/armour/sarrow/sarrow.png'
import fter from '../assets/armour/footer.jpg'
import sec5bg from '../assets/armour/sec5bg.jpg'
import sec5second from '../assets/armour/02sec5.jpg'
import sec5first from '../assets/armour/01sec5.jpg'

const home = () => {
  const [isYearly, setIsYearly] = React.useState(true);
  return (
    <div>
      <div className="hero_container">
        <div className="hero_img h-[100%] w-[100%] flex flex-col items-center relative">
          <img src={heroimg} alt="" className='h-[80%] w-[90%] ' />
        </div>

        <div className=" hero_details text-white   absolute mt-[-300px] flex justify-around w-[100%] items-end flex-row ">
          <div className="main_details ml-[1rem]">
            <span className=' font-sans  text-[1.5rem] font-bold leading-none '>THE IDEAL BODY NEVER EXISTS</span>
            <h1 className=' font-sans scale-y-100  font-extrabold tracking-wide text-[5rem] leading-none'>BUT GOOD <br />HEALTH DOES.</h1>
            <span className=' ml-1'>Live a healthy life.Meet the trainers,overcome the challenges.</span>
          </div>
          <div className='hero_btn' >
            <button onClick={() => alert('hehe')} className='cursor-pointer w-[60px] flex justify-center items-center mb-5 h-[60px] rounded-[50%] bg-blue-400'>
              <img src={arrow} className='w-[30px] h-[30px]' alt="wrg" />
            </button>
          </div>
        </div>

      </div>
      {/* secont container  */}

      <div className="second_section ">
        <div className="second_sec1 h-[100%] w-[100%] flex flex-col items-center relative">
          <div className="sec2_img h-screen w-[100%] flex flex-col items-center ">
            <img src={sec2img} alt="" className='h-[80%] w-[100%] ' />
          </div>

          <div className="sec2_details text-white text-center  absolute mt-[200px] ml-40">
            <div className="sec2_spans flex justify-center items-center flex-col mr-20 ">

              <span className='h-[30px] w-[100px] m-1 flex justify-center items-center -rotate-10  p-1 mb-[-10px] bg-amber-500 text-white rounded-2xl font-bold uppercase text-center'>About Us</span>
              <h1 className='   font-extrabold tracking-normal text-[3rem] leading-none'>GOOD HEALTH FOR EVERYBODY</h1>
              <span className='text-center mt-5'>Whether you're a seasoned athlete or just starting out, we have a variety <br /> of equipment and classes to suite your needs. Our cardio machines, <br /> weight lifting equipment, and functional training areas provide a <br /> comprehensive workout experience.</span>

              <div>
                <button onClick={() => alert('hehe')} className=' cursor-pointer w-[100%] flex justify-center items-center p-2 pl-4 pr-4 h-[100%] rounded-2xl uppercase bg-blue-400 mt-4'>join now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third */}

      <div className="third_section mt-[-130px] ">
        <div className="third_sec1 h-[100%] w-[100%] flex flex-col items-center">
          <div className="sec2_details text-white text-center ml-40">
            <div className="flex justify-center items-center flex-col mr-20 ">
              <span className='h-[30px] w-[130px] m-1 flex justify-center items-center -rotate-10 p-1 mb-[-10px] bg-green-400 text-white rounded-2xl font-bold uppercase text-center'>our classes</span>
              <h1 className='   font-extrabold tracking-normal text-[3rem] uppercase leading-none'>Dive into our dynamic fitness <br />experiences</h1>
              <span className='text-center mt-5 mb-6'>Gain up your routine with our growing library of workout led by our<br /> world class trainers.</span>
            </div>
          </div>
        </div>
      </div>


      {/* fourth */}

      <div className="fourth_container mt-10  pb-4">
        <div className="sec4 h-[100%] w-[90%] flex flex-row">
          <div className="cards1 mt-40 ml-15 flex flex-col relative">
            <img src={yoga} alt="" className='h-[500px] w-[700px] relative' />
            <span className='bg-transparent text-white text-5xl absolute uppercase ml-30 mt-[-15px] font-bold scale-y-200 '  >yoga</span>
            <div className='card1_div absolute flex flex-row justify-around bg-[rgb(37,37,37)] text-white w-max rounded-2xl mt-[360px] ml-13 p-2 '>
              <p className='mt-1 ml-2 mr-2'>Make a mindful movement <br /> as your daily ritual. </p>
              <button className='self-end mb-[-5px] cursor-pointer'>
                {/* SVG Arrow */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
          <div className="cards2 mt-7 flex flex-col relative">
            <img src={hit} alt="" className='h-[500px] w-[350px] relative   rounded-2xl' />
            <span className='bg-transparent text-white text-5xl absolute uppercase ml-10 mt-[-30px] font-bold scale-y-200 ' > hit</span>
            <div className='card2_div absolute flex flex-row justify-around bg-[rgb(37,37,37)] text-white w-max rounded-2xl mt-[460px] ml-13 p-2 '>
              <p className='mt-1 ml-2 mr-2'>it's the excitement that <br />keep you going.</p>
              <button className='self-end mb-[-5px] cursor-pointer'>
                {/* SVG Arrow */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
          <div className="cards3 mt-60 ml-[200px] flex flex-col relative visible z-1">
            <img src={strength} alt="" className='h-[500px] w-[300px] relative   rounded-2xl' />
            <span className='bg-transparent text-white text-5xl absolute uppercase ml-10 mt-[480px] font-bold scale-y-200 '>strength</span>
            <div className='card3_div absolute flex flex-row justify-around bg-[rgb(37,37,37)] text-white w-max rounded-2xl mt-[400px] ml-45 p-2 '>
              <p className='mt-1 ml-2 mr-2'>Push your self into <br />unimaginable</p>
              <button className='self-end mb-[-5px] cursor-pointer'>
                {/* SVG Arrow */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>

              </button>
            </div>
          </div>
          <div className="cards4 mt-[40%] ml-[-60%] flex flex-col relative z-0 ">
            <img src={cardio} alt="" className='h-[300px] w-[600px] relative   rounded-3xl' />
            <span className='bg-transparent text-white text-5xl absolute uppercase ml-[-11%] mt-[200px] font-bold scale-y-200 '>cardio</span>
            <div className='card4_div absolute flex flex-row justify-around bg-[rgb(37,37,37)] text-white w-max rounded-2xl mt-[100px] ml-[-10%] p-2 '>
              <p className='mt-1 ml-2 mr-2'>Take your self to the next <br />lavel.</p>
              <button className='self-end mb-[-5px] cursor-pointer'>
                {/* SVG Arrow */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>




        </div>
        <div className="sec4_second flex flex-col mb-5 text-center justify-center items-center mt-10">
          <p className='text-white text-center text-2xl'>our programmer are varied and flexible.you can do it everywhere:home,park or gym. </p>
          <button className=' mt-4 text-white font-bold uppercase flex items-center justify-center rounded-3xl bg-blue-400 p-3 pl-4 pr-4'>explore programs</button>

        </div>


      </div>
      <div className="sec5_container">
        <div className="sec5main_content ">
          <img src={sec5bg} alt="" className='sec5img h-[100%] w-[100%] relative' />
          <div className="sec5_span absolute text-center mt-[-60%] ml-[35%]">
            <span className='bonuses text-7xl bg-transparent font-extrabold font-sans  scale-x-100  text-blue-400 block uppercase mb-100'>bonuses</span>
            <span className='for_you text-8xl bg-transparent font-extrabold font-sans scale-x-100 text-white block uppercase '>for you</span>
          </div>
          <div className="sec5cards font-bold uppercase grid grid-cols-2 justify-center m-auto w-[100%]  absolute mt-[-65%]">
            <div className="s5c card5_item1 ml-52 -rotate-7 flex flex-col  bg-white text-black rounded-2xl h-max w-max ">
              <span className='ml-2 mb-3 mt-3'>installment classes <br />subscription</span>
              <div className="img bg-blue-400 w-[100%] h-[50%] flex justify-center items-center mt-2 mb-2" ><img src={hit} alt="" className='h-[150px] w-[250px] rounded-[80%]' /></div>
              <div className="p_div justify-around flex flex-row  gap-15 mb-3 mt-3 m-auto">
                <span className='block'>01</span>
                <span className='text-blue-400 block'>more details [+]</span>
              </div>
            </div>
            <div className="s5c card5_item2 ml-64 mt-[0%] rotate-7 flex flex-col  bg-white text-black rounded-2xl h-max w-max ">
              <span className='ml-2 mb-3 mt-3'>loyal system for <br />regular customers</span>
              <div className="img bg-blue-400 w-[100%] h-[50%] flex justify-center items-center mt-2 mb-2"><img src={sec5first} alt="" className='h-[150px] w-[250px] rounded-[80%]' /> </div>
              <div className="p_div justify-around flex flex-row  gap-15 mb-3 mt-3 m-auto">
                <span className='block' >02</span>
                <span className='text-blue-400 block'>more details [+]</span>
              </div>
            </div>
            <div className="s5c card5_item3 ml-52 mt-[200px] rotate-7 flex flex-col  bg-white text-black rounded-2xl h-max w-max">
              <span className='ml-2 mb-3 mt-3'>loyal system for <br />regular customers</span>
              <div className="img bg-blue-400 w-[100%] h-[50%] flex justify-center items-center mt-2 mb-2"><img src={strength} alt="" className='h-[150px] w-[250px] rounded-[80%]' /> </div>
              <div className="p_div justify-around flex flex-row  gap-15 mb-3 mt-3 m-auto">
                <span className='block' >03</span>
                <span className='text-blue-400 block'>more details [+]</span>
              </div>
            </div>
            <div className="s5c card5_item4 ml-64 mt-[200px] -rotate-7 flex flex-col  bg-white text-black rounded-2xl h-max w-max">
              <span className='ml-2 mb-3 mt-3'>loyal system for <br />regular customers</span>
              <div className="img bg-blue-400 w-[100%] h-[50%] flex justify-center items-center mt-2 mb-2"><img src={sec5second} alt="" className='h-[150px] w-[250px] rounded-[80%]' /> </div>
              <div className="p_div justify-around flex flex-row  gap-15 mb-3 mt-3 m-auto">
                <span className='block' >04</span>
                <span className='text-blue-400 block'>more details [+]</span>
              </div>
            </div>


          </div>




        </div>




      </div>
      <div className="sec6_details w-[100%] text-white bg-black text-center pt-[90px]">
        <div className="flex justify-center items-center flex-col ">

          <span className='h-[30px] w-max m-1 flex justify-center items-center -rotate-10  p-1 z-1 -mb-1 bg-amber-500 text-white rounded-2xl font-bold uppercase text-center'>subscription</span>
          <h1 className='   font-extrabold tracking-normal text-[3rem] leading-none uppercase scale-y-150'>choose your plan</h1>
          <span className='text-center mt-5'>this is the exciting step,the beginning of your soon to be fantastic journey.Choose wisely-no pressure. <br /> If you are not happy doing it,what's the point?</span>

          <div>
            <div className="flex items-center mb-5 mt-10">
              <span
                className={`mr-3 text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-600'}`}
              >
                Monthly
              </span>
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isYearly}
                  onChange={() => setIsYearly((prev) => !prev)}
                />
                <div className="w-9 h-5 bg-blue-200 hover:bg-blue-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400 hover:peer-checked:bg-blue-700 "></div>
              </label>
              <span
                className={`ml-3 text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-600'}`}
              >
                Yearly
              </span>
            </div>
            <div className="suggestedplan justify-center items-center flex"><span className='text-blue-400 mb-6'>Save Up To 79%</span>
              <img className='inline-block mb-10 mt-[-15px]' width="50" height="35" src={sarrow} alt="up2" />
            </div>
          </div>
        </div>
      </div>
      <Subplan />
      <div className="fter relative flex flex-col justify-center items-center">
        <img src={fter} alt="" className='w-[100%] h-[500px]' />
        <div className="ftext text-2xl absolute flex flex-col items-center justify-center"><h3 className='text-6xl font-bold'>THEY DID/T,YOU?</h3>
          <p className='text-slate-400'>experiences it yourself with two free weeks of our programs,cancel anytime. </p></div>
      </div>
    </div>
  )
}

export default home
