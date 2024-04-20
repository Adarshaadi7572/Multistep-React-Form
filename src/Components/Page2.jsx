import React from 'react'
import { useState } from 'react'
import Button from './Button';
import Header from './Header';

let Page2 = () => {

  const [formData, setFormData] = useState({});
  const [checked, setChecked] = useState(false);
  const [Id , setId] = useState(0);
  const clicked = true;
  let pageCount = 28.8;
  
  function clickeHandler(id) {
     setChecked(true)
    const input = document.getElementById(id);
    let name = input.name;
    let value = input.value;
    setFormData({[name] : value});

      input.checked = input.checked;  
      setId(id); 

  }
  console.log(formData);
  return (
    <div>
      <Header clicked={clicked} pageCount={pageCount}/>
      <div className='flex flex-col justify-evenly max-h-[32rem]'>
        <div className='flex flex-col gap-3 -mt-3'>
          <h1 className='w-full text-center text-3xl font-semibold max-[420px]:text-2xl max-[200px]:text-xl '>Which are you most interested in?</h1>
          <p className='w-full text-center max-[420px]:text-sm'>Choose just one. This will help us get you started(But will not limit your experience)</p>
        </div>
        <div className='flex items-center justify-center'>

          <form className='flex flex-col h-96 justify-between w-96 mt-7 max-[420px]:w-80 max-[333px]:w-64'>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Learning specific skills to " id="1" checked={formData.mode === "Learning specific skills to advance my career"} onChange={(event) => {

      setFormData({[event.target.name] : event.target.value});
              }} />
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 1 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => clickeHandler(1)}>
                <div>
                  <img src='src/Utilities/icons/growth.png' />
                </div>

                <label htmlFor="1" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Learning</span> specific skills to advance my career</label>
              </div>
            </div>

            <div className='relative flex'>
              <input type="radio" name="mode" value="Exploring new topic i'am interested in" id="2" checked={formData.mode === "Exploring new topic i'am interested in"} onChange={(event) => {
                  
                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)]  max-[420px]:w-80 max-[333px]:w-64 ${Id == 2 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(2)}>
                <div>
                  <img src='/Utilities/icons/planet-earth.png' />
                </div>
                <label htmlFor="2" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Exploring</span> i'am interested in</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Refreshing my math foundation" id="3" checked={formData.mode === "Refreshing my math foundation"} onChange={(event) => {
                
                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 3 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(3)}>
                <div>
                  <img src='/Utilities/icons/coordinate.png' />
                </div>
                <label htmlFor="3" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Refreshing</span> my math foundations</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Exercising my brain to stay sharp" id="4" checked={formData.mode === "Exercising my brain to stay sharp"} onChange={(event) => {

                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 4 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(4)}>
                <div>
                  <img src='/Utilities/icons/dart.png' />
                </div>
                <label htmlFor="4" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Exercising</span> my brain to stay sharp</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Something else" id="5" checked={formData.mode === "Something else"} onChange={(event) => {

                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 5 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(5)}>
                <div>
                  <img src='/Utilities/icons/eyes.png' />
                </div>
                <label htmlFor="5" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Something</span> else</label>
              </div>
            </div>
          
            <div className='text-center'>
            <Button checked = {checked} pageCount = {pageCount}/>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Page2;