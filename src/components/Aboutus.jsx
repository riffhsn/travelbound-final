import React from 'react'

const Aboutus = () => {
  return (
    <div className='about_us py-20 container mx-auto'>
        <div className='aboutus_head'>
        <h2 className='text-6xl font-bold text-center py-20'>About Travelbound</h2>
        </div>
    <div className='about_text grid grid-cols-2 gap-2'>
      <div>
      <h3 className='text-4xl font-bold py-5 text-left'>Get to know us</h3>
    <p className='text-2xl text-left from-neutral-500'>
    We are a travel agency based in Bangladesh. Our aim is to provide ultimate immersive experience to our clients. Our travel package includes tour of the Northern region of Bangladesh, primarily Rajshahi. Book a trip with us to dive into a natural, historical and cultural adventure like never before. 
    </p>
    <button href='#' className='font-bold p-3 px-8 my-5 outline rounded-xl hover:bg-green-400 shadow-3xl transition duration-75 delay-75 ease-out transform hover:-translate-y-1 hover:scale-110'>Book Now</button>
      </div>
    <div className='grid grid-cols-2 gap-2'>
      <img src='./images/chalanbeel3.png' alt='about-1' className='max-w-fit rounded-3xl'></img>
    </div>
    </div>
          </div>  )
}
export default Aboutus

