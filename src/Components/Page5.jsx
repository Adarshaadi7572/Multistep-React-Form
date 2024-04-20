import React from 'react';

import Button from './Button';
import Header from './Header';

let Page5 = () => {
  const checked = true;
  const pageCount = 72;
  const clicked = true;
  
 return (
   <div>
     <Header clicked={clicked} pageCount={pageCount}/>
     <div className='flex items-center justify-center gap-28 max-h-[28rem] max-md:gap-20 max-sm:gap-10 max-sm:flex-wrap p-5'>
       <div className='w-80 max-md:w-48'>
         <img src='/Utilities/icons/cheer.png' />
       </div>
       <div className='w-[29rem] flex flex-col gap-5'>
         <h1 className='text-2xl font-bold max-sm:text-xl '>Your are on the way!</h1>
         <div className='flex flex-col gap-3 max-w-96 '>
           <div className='flex'>
             <img src='/Utilities/icons/star.png' className='max-md:w-5 max-md:h-5'/>
             <img src='/Utilities/icons/star.png' className='max-md:w-5 max-md:h-5'/>
             <img src='/Utilities/icons/star.png' className='max-md:w-5 max-md:h-5'/>
             <img src='/Utilities/icons/star.png' className='max-md:w-5 max-md:h-5'/>
             <img src='/Utilities/icons/star.png' className='max-md:w-5 max-md:h-5'/>
           </div>
         <p className='text-sm italic max-sm:text-xs'>"through it's engaging and well structurd course. Brillient has tought me mathematical concept that i previosly struggled to understand. I now feel confident appraoching technical job interview and the real world problem solving situations".</p>
           <span className='italic'> - jacob.s</span>
        <div className='max-sm:text-center'>
         <Button checked={checked} pageCount={pageCount}/>
        </div>
         </div>
       </div>
     </div>
   </div>
 )
}
export default Page5;