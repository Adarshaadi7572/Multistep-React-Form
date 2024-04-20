import './App.css';

import Page1 from './Components/Page1';
import { Routes, Route } from 'react-router-dom';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
export default function App() {


  return (

    <div>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} />
        <Route path='/page5' element={<Page5/>} />
        <Route path='/page6' element={<Page6/>} />
      </Routes>
    </div>
  );
}

