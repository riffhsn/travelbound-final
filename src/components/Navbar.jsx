import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav style={{backgroundImage: 'url("./images/yellow-bg.png")', 
backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', height: "90vh"}}>
   <div className='navbar grid grid-cols-2 text-center font-semibold text-1xl text-black-600'>
    <div>
    <ul className='flex justify-end p-5'>
        <li className='p-4 px-10 hover:bg-green-400 rounded-xl'>
<Link>Home</Link>
        </li>
        <li className='p-4 px-10 hover:bg-green-400 rounded-xl'>
            <Link> About Us</Link>
        </li>
        <li className='p-4 px-10 hover:bg-green-400 rounded-xl'>
            <Link to='/Services'>Services</Link>
        </li>
        <li className='p-4 px-10 hover:bg-green-400 rounded-xl'>
            <Link to='/Contact'>Contact</Link>
        </li>
    </ul>
    </div>
    <div className='py-10'>
      <button className= 'px-8 p-3 bg-white rounded-xl mx-5 justify-normal align-middle hover:transition ease-out duration-75 delay-75 transform hover:translate-y-1 hover:scale-110 hover:outline'><h3><Link to="/Login">Login</Link></h3></button>
      <button className='px-8 p-3 bg-white rounded-xl mx-5 justify-normal align-middle hover:transition ease-out duration-75 delay-75 transform hover:translate-y-1 hover:scale-110 hover:outline'><h3><Link to="/Signup">Sign Up</Link></h3></button>
    </div>
    </div>
    <div className='grid grid-cols-2 px-20'>
      <div className='typeanimation'>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       'Welcome To Travelbound',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontFamily: 'Raleway', fontSize: '70px', display: 'inline-block', color: '#4ade80', fontStyle: 'bold' }}
      repeat={Infinity}
    />
       <div>
    <h3 className='flex justify-start font-bold text-[24px] text-start my-10'>Indulge in an immersive experience of nature, culture and history</h3>
    <p className='font-bold pb-10'>Travelbound is an exclusive travel agency with package tours across the Northern region of Bangladesh, primarily Rajshahi. Enjoy diverse cultural, historical and natural activities and explore the gems of Rajshahi. Our prime focus is to provide an immersive experience for our travelers. </p>
    </div>
    <div className='header_button inline-flex justify-start'>
      <button className= 'px-8 p-3 outline rounded-xl mx-5 justify-normal align-middle hover:bg-green-400 transition ease-out duration-75 delay-75 transform hover:translate-y-1 hover:scale-110'>Book Now</button>
      <button className='px-8 p-3 outline rounded-xl mx-5 justify-normal align-middle hover:bg-green-400 transition ease-out duration-75 delay-75 transform hover:translate-y-1 hover:scale-110'> <h3><Link to="/Contact">Contact</Link></h3></button>
      </div>
      </div>
    <img src='/images/rajshahi streets.jpg' alt='rajshahi-streets' className='rounded-3xl my-20 mx-20 drop-shadow-2xl'></img>
      </div> 
      </nav>
  )
}
     
export default Navbar