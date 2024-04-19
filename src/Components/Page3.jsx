import React from 'react'
import Button from './Button';
import Header from './Header';
let Page3 = () => {
  const checked = true;
  const pageCount = 43.2;
  const clicked = true;
  return (
    <div>
      <Header clicked={clicked} pageCount={pageCount}/>
      <div className='flex flex-col w-full'>
      
      <div className='flex items-center justify-center gap-32 h-[25rem] max-md:gap-10 w-full'>
        <div className='w-80 pl-2 max-md:w-64'>
          <img src='src/Utilities/icons/pully.png' />
        </div>
        <div className='w-[28rem] flex flex-col gap-5 p-3'>
          <h1 className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Your are in the right place</h1>
          <p className='max-md:text-sm max-sm:text-xs'>Brilliant gets you hands-on to help improve your proffesional skills and knowledge. You'll interact with concept and solve fun problem in math, science and computer science.</p>
        </div>
      </div>
      
      <div className='text-center'>
        <Button checked={checked} pageCount={pageCount}/>
      </div>
      </div>
    </div>
  )

}
export default Page3;