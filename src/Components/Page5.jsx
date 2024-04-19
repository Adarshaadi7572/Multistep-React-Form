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
     <div className='flex items-center justify-center gap-32 max-h-[28rem]'>
       <div className='w-80'>
         <img src='src/Utilities/icons/cheer.png' />
       </div>
       <div className='w-[29rem] flex flex-col gap-5'>
         <h1 className='text-2xl font-bold'>Your are on the way!</h1>
         <div className='flex flex-col gap-3'>
           <div className='flex'>
             <img src='src/Utilities/icons/star.png'/>
             <img src='src/Utilities/icons/star.png'/>
             <img src='src/Utilities/icons/star.png'/>
             <img src='src/Utilities/icons/star.png'/>
             <img src='src/Utilities/icons/star.png'/>
           </div>
         <p className='text-sm italic'>"through it's engaging and well structurd course. Brillient has tought me mathematical concept that i previosly struggled to understand. I now feel confident appraoching technical job interview and the real world problem solving situations".</p>
           <span className='italic'> - jacob.s</span>
         </div>
       </div>
     </div>

     <div className='text-center'>
       <Button checked={checked} pageCount={pageCount}/>
     </div>
   </div>
 )
}
export default Page5;