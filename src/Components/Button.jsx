import React from 'react';
import {useNavigate} from 'react-router-dom';
let Button = (props) => {
  const navigate = useNavigate();
  const checked = props.checked;
  const pageCount = props.pageCount;
    function clickHandler() {
      if(pageCount === 14.4){
        navigate('/page2');
      }
      else if(pageCount === 28.8){
        navigate('/page3');
      }
      else if(pageCount === 43.2){
        navigate('/page4')
      }
      else if(pageCount === 57.6){
        navigate('/page5');
      }
      else if(pageCount === 72) {
        navigate( '/page6');
      }
    }
  return (
    <div>
    {
      checked ? (<button className='w-36 h-10 border border-1 bg-black rounded-md text-white' onClick={clickHandler}>Continue</button>)
    : (<button className='w-36 h-10 border border-1 bg-gray-400 rounded-md text-white'>Continue</button>)
    }
    </div>
  )

  
} 
export default Button;
  