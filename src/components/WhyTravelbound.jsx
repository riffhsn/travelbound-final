import React from 'react'

const WhyTravelbound = () => {
  return (
   <div className='container mx-auto'>
<div className='font-bold text-6xl text-center'>
<h2 className='py-20'>Why Travelbound?</h2>
</div>
<div className='grid grid-cols-2 gap-20'>
<div>
    <img src='./images/santaltribe.png' className='rounded-3xl'></img>
</div>
<div>
<h2 className='text-4xl font-bold py-5'>Why Choose Us?</h2>
<p className='text-2xl'>We are an exclusive and premium travel agency focused on providing top notch service and a complete immersive experience to our esteemed clients. We promise to ensure a complete package of a memorable experience of a lifetime. </p>
<button className='p-3 px-10 my-5 outline rounded-xl font-bold hover:bg-green-400 transition duration-75 delay-75 ease-out transform hover:translate-y-1 hover:scale-110 shadow-3xl'>
    Learn More
</button>
</div>
   </div>
   </div>
  )
}

export default WhyTravelbound