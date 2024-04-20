import React from 'react';
import Loading from './Loading';
import {useState} from 'react';


let Page6 = () => {
const [loading , setLoading] = useState(true);
  
return (
<div>
  {
    loading ? (<Loading setLoading={setLoading}/>) : (
      <div className='w-full h-screen flex flex-col items-center justify-center gap-16'>
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-bold text-center max-sm:text-3xl max-[420px]:text-2xl'>Learning path based on your answers</h1>
          <p className='text-gray-600 text-center max-sm:text-base max-[420px]:text-sm'>Choose one to get started. You can switch anytime</p>
        </div>
        <div className='flex gap-7 flex-wrap items-center w-full justify-center'>
          <div className='flex border border-1 rounded-md w-96 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] relative max-sm:w-80'>
            <p className='pl-4 max-sm:text-sm'><span className='font-semibold'>Foundational Maths</span> build your foundational skill in algebra, geometry and probability</p>
            <div>
              <img src='/Utilities/icons/Math_Foundations.gif' />
            </div>
            <div className='w-28 h-7 bg-orange-400 text-center rounded-full absolute -top-4 font-semibold text-sm flex items-center justify-center'> Most Populer</div>
          </div>
          <div className='flex border border-1 rounded-md w-96 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-sm:w-80'>
            <p className='pl-4 max-sm:text-sm'><span className='font-semibold'>Foundational Maths</span> build your foundational skill in algebra, geometry and probability</p>
            <div>
              <img src='/Utilities/icons/Math_Foundations.gif' />
            </div>
         
          </div>
        </div>
      </div>
    )
      
  }
  
</div>
)
  
}
export default Page6;