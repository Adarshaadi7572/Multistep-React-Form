import React from 'react';
const Loading = (props) => {

    setTimeout(() => {
      props.setLoading(false);
    }, 1000);


    return (
       <div className='flex flex-col h-screen w-full items-center justify-center gap-5'>
         <div>
           <img src ='/Utilities/icons/circle.png'/>
         </div>
         <div>
           <p className='text-3xl font-bold text-center  max-md:text-2xl max-sm:text-xl'>Finding learning path recommendation for you based on your responses</p>
         </div>       
       
       </div>
      
    )
}
export default Loading;