// Header component is considered as a progress bar 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

let Header = (props) => {
  const clicked = props.clicked;
  const pageCount = props.pageCount;
  const navigate = useNavigate();

  function backHandler() {
    if (pageCount === 28.8) {
      navigate('/');
    } else if (pageCount === 43.2) {
      navigate('/page2');
    } else if (pageCount === 57.6) {
      navigate('/page3');
    } else if (pageCount === 72) {
      navigate('/page4');
    }
  }

  const progressBarWidth = `${pageCount}%`;

  return (
    <div className='w-full h-20 flex items-center justify-center gap-2'>
      {clicked && (
        <button onClick={backHandler}>
          <FontAwesomeIcon icon={faLessThan} />
        </button>
      )}
      <div className='w-[72%] h-1 bg-slate-200'>
        <div style={{ width: progressBarWidth }} className="h-1 bg-green-400"></div>
      </div>
    </div>
  );
};

export default Header;
