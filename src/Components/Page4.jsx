import React from 'react';
import Button from './Button';
import Header from './Header';
import {useState} from 'react';

let Page4 = () => {
  const clicked = true;
  const pageCount = 57.6;
  const [checked, setChecked] = useState(false)
  const [clickedData , setClickedData] = useState({});
  const [id, setid] = useState(0);
  console.log(clickedData);
  return (
    <div>
      <Header clicked={clicked} pageCount={pageCount} />
     <div className='w-full flex flex-col items-center gap-14 mt-10'>

      <div className='flex flex-col gap-4 '>
        <h1 className='text-center text-4xl font-semibold max-md:text-3xl max-sm:text-2xl'>What is your math comfort lavel?</h1>
        <p className='text-gray-600 text-center max-md:text-sm max-sm:text-xs '>Choose the heighest you feel confident in - you can always adjust later</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5 w-full'>
        <div className={`flex flex-col border border-1 rounded-md w-36 h-36 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] ${id == 1 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => {
      setid(1);
      setChecked(true);
      setClickedData({[id] : "Arithmetic Introductry"});
        }}>
          <div>
            <img src='/Utilities/icons/arithmetic.png' />
          </div>
          <div className='flex flex-col items-center '>
            <p className='font-semibold text-sm'>Arithmetic</p>
            <p className='text-sm text-gray-600'>Introductory</p>
          </div>
        </div>
        <div className={`flex flex-col border border-1 rounded-md w-36 h-36 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] ${id == 2 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => {
          setid(2);
          setChecked(true);
          setClickedData({[id] : "Besic Algebra"});
            }}>
          <div>
            <img src='/Utilities/icons/equation.png' />
          </div>
          <div className='flex flex-col items-center '>
            <p className='font-semibold text-sm'>Besic Algebra</p>
            <p className='text-sm text-gray-600'>Foundational</p>
          </div>
        </div>
        <div className={`flex flex-col border border-1 rounded-md w-36 h-36 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] ${id == 3 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => {
          setid(3);
      setChecked(true);
          setClickedData({[id] : "Introductory Algebra"});
            }}>
          <div>
            <img src='/Utilities/icons/ialgebra.png' />
          </div>
          <div className='flex flex-col items-center '>
            <p className='font-semibold text-sm'>Intermediate Algebra</p>
            <p className='text-sm text-gray-600'>Intermediate</p>
          </div>
        </div>
        <div className={`flex flex-col border border-1 rounded-md w-36 h-36 items-center justify-evenly hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] ${id == 4 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => {
          setid(4);
      setChecked(true);
          setClickedData({[id] : "calculus"});
            }}>
          <div>
            <img src='/Utilities/icons/calculus.png' />
          </div>
          <div className='flex flex-col items-center '>
            <p className='font-semibold text-sm'>Calculus</p>
            <p className='text-sm text-gray-600'>Advanced</p>
          </div>
        </div>

      </div>
      <div>
        <Button checked={checked} pageCount={pageCount} />
      </div>
     </div>
    </div>
  )
}
export default Page4;
