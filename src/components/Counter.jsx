import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-4 p-40'>
      <div>
        <img src='./images/travel.png' className='w-40 text-center mx-auto'></img>
        <h3 className='text-center font-bold text-5xl py-5'>
        <CountUp end={280} />
        </h3>
        <h4 className='text-center font-bold text-3xl'>Successful Tours</h4>
      </div>
      <div>
        <img src='./images/customer-review.png' className='w-40 text-center mx-auto'></img>
        <h3 className='text-center font-bold text-5xl py-5'> <CountUp end={5600} /></h3>
        <h4 className='text-center font-bold text-3xl'>Happy Travelers</h4>
      </div>
      <div>
        <img src='./images/recommend.png' className='w-40 text-center mx-auto'></img>
        <h3 className='text-center font-bold text-5xl py-5'> <CountUp end={12} /></h3>
        <h4 className='text-center font-bold text-3xl'>Years of Service</h4>
      </div>
      <div>
        <img src='./images/airplane.png' className='w-40 text-center mx-auto'></img>
        <h3 className='text-center font-bold text-5xl py-5'> <CountUp end={280} /></h3>
        <h4 className='text-center font-bold text-3xl'>Flights</h4>
      </div>
    </div>
  )
}

export default Counter