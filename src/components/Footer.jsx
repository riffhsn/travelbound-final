import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container mx-auto p-20'>
        <div className='grid grid-cols-3 gap-4'>
<div>
    <h2 className='font-bold text-center text-xl pb-2'>Explore</h2>
    <a href='#'><h4 className='font-bold text-center'>About Us</h4></a>
    <a href='#'><h4 className='font-bold text-center'>Booking Process</h4></a>
    <a href='#'><h4 className='font-bold text-center'>Refund Policy</h4></a>
    <a href='#'><h4 className='font-bold text-center'>Terms & Conditions</h4></a>
</div>
<div>
    <ul className='text-center'>
        <li>
        <a href='#' className='font-bold text-center text-xl pb-2'>Contact</a>
        </li>
        <li> <a href='#' className='font-bold py-2'>info@travelbound.com</a></li>
        <li> <a href='#' className='font-bold py-2'>+8801794278909</a></li>
    </ul>
    <div className='flex justify-center items-center py-5'>
    <a href='#'>< FaLinkedin className='text-cyan-700 size-6 mx-2' /></a>
    <a href='#'>
        <FaFacebook className='text-cyan-800 size-6 mx-2' /></a>
    <a href='#'><FaInstagram className='text-orange-600 size-6 mx-2'  />
    </a>
    </div>
</div>
<div>
<h2 className='font-bold text-center text-xl pb-2'>Payment Methods</h2>
<img src='./images/payment method.png' className='py-5 mx-auto'></img>
    </div>
        </div>
        <div><p className='text-center pt-10'>Copyright © 2024 Travelbound. All Rights Reserved.</p></div>
        <div className='container mx-auto animate-pulse text-4xl text-green-600 scroll-smooth'>
        <ScrollToTop smooth component={<FaArrowCircleUp />} className='animate-pulse scroll-smooth'
       />

    </div>
    </div>
  )
}

export default Footer