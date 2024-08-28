import React from 'react'

const Partners = () => {
  return (
    <div>
<div>
    <h2 className='font-bold text-6xl text-center pb-14'>Partners</h2>
</div>
<div className='grid grid-cols-4 gap-4 container mx-auto'>
  <div className='w-96'>
  <img src='images/scb-logo.png' alt='partner_1' className='mx-auto size-[250px]'></img>
  </div>
  <div className='w-96'>
  <img src='images/nongor.jpg' alt='partner_2' className='mx-auto size-[175px]'></img>
  </div>
  <div>
  <img src='images/Novoair.png' alt='partner_3' className='text-center mx-auto size-[175px]'></img>
  </div>
  <div>
  <img src='images/royalrajhotel.png' alt='partner_4' className='text-center mx-auto size-[175px]'></img>
  </div>
</div>
    </div>
  )
}

export default Partners