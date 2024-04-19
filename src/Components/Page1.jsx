// The page starts from  here
import React from 'react'
import { useState } from 'react'
import Button from './Button';
import Header from './Header';
let Page1 = () => {
  const [formData, setFormData] = useState({})
  const [checked, setChecked] = useState(false)
  const [Id , setId] = useState(0);
  const clicked = false;
  const pageCount = 14.4;

  
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
      <Header clicked = {clicked} pageCount={pageCount}/>
      <div className='flex flex-col justify-evenly max-h-[32rem]'>
        <div className='flex flex-col gap-3 -mt-3'>
          <h1 className='w-full text-center text-3xl font-semibold max-[420px]:text-2xl max-[200px]:text-xl '>Which describe you best ?</h1>
          <p className='w-full text-center max-[420px]:text-sm '>This will help us personlize your experience</p>
        </div>
        <div className='flex items-center justify-center w-full'>

          <form className='flex flex-col h-96 justify-between w-96 mt-7 max-[420px]:w-80 max-[333px]:w-64'>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Student or soon to be enrolled" id="1" checked={formData.mode === "Student or soon to be enrolled"} onChange={(event) => {
    
      setFormData({[event.target.name] : event.target.value});
              }} />
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 1 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`} onClick={() => clickeHandler(1)}>
                <div>
                  <img src='src/Utilities/icons/student.png' />
                </div>

                <label htmlFor="1" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Student</span> or soon to be enrolled</label>
              </div>
            </div>

            <div className='relative flex'>
              <input type="radio" name="mode" value="Proffesional persuing a career" id="2" checked={formData.mode === "Proffesional persuing a career"} onChange={(event) => {
             
                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 2 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(2)}>
                <div>
                  <img src='src/Utilities/icons/businessman.png' />
                </div>
                <label htmlFor="2" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Proffesional</span> persuing a career</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Parent of a school kid child" id="3" checked={formData.mode === "Parent of a school kid child"} onChange={(event) => {

                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 3 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(3)}>
                <div>
                  <img src='src/Utilities/icons/parent.png' />
                </div>
                <label htmlFor="3" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Parent</span> of a School-age Child</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Lifelong learner" id="4" checked={formData.mode === "Lifelong learner"} onChange={(event) => {
 
                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 4 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(4)}>
                <div>
                  <img src='src/Utilities/icons/man-avatar.png' />
                </div>
                <label htmlFor="4" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Lifelong</span> learner</label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Teacher" id="5" checked={formData.mode === "Teacher"} onChange={(event) => {

                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 5 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(5)}>
                <div>
                  <img src='src/Utilities/icons/teacher.png' />
                </div>
                <label htmlFor="5" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Teacher</span></label>
              </div>
            </div>
            <div className='relative flex'>
              <input type="radio" name="mode" value="Others" id="6" checked={formData.mode === "Others"} onChange={(event) => {
 
                  setFormData({[event.target.name] : event.target.value});
                          }}/>
              <div className={`flex absolute z-10 gap-3 bg-white border border-1 w-96 h-12 items-center pl-2 rounded-md hover: hover:outline-orange-200 hover:outline hover:outline-offset-0 hover:outline-2 hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.3)] max-[420px]:w-80 max-[333px]:w-64 ${Id == 6 && `outline-orange-200 outline-offset-0 outline-2 outline shadow-[0_4px_16px_0px__rgba(0,0,0,0.3)]`}`}  onClick={() => clickeHandler(6)} >
                <img src='src/Utilities/icons/other.png' />
                <label htmlFor="6" className='max-[333px]:text-sm'><span className='font-semibold max-[333px]:text-sm'>Others</span></label>
              </div>
            </div>
            <div className='text-center'>
            <Button checked = {checked} pageCount={pageCount}/>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Page1;