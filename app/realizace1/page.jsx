'use client';
import React from 'react';
import Section from './components/Section';
import Section2 from './components/Section-two.jsx';
import Section3 from './components/Section-three.jsx';
import Section4 from './components/Section-four.jsx';
import Rounded from '../../common/CustomButtonA';
import RoundedB from '../../common/CustomButtonB';
import RoundedC from '../../common/CustomButtonC';
import RoundedD from '../../common/CustomButtonD';
import RoundedE from '../../common/CustomButtonE';
import Hero3 from '../components/Hero3/Hero3.jsx';
import Hover from "./components/Hover.jsx";
import Hover2 from './components/Hover2';

const page = () => {
  return (
    <div className="text-8xl">
      <div className="h-screen bg-slate-600 flex items-center justify-center">
        <p>David Pešek</p>
      </div>
      <div>
        <Hover />
      </div>
      <div>
        <Hover2 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div className=" bg-red-100">
        <div className="mx-[600px]">
          <Rounded />
        </div>
        <div className="pt-28 mx-[700px]">
          <RoundedB>
            <p>ffff2222222fffff</p>
          </RoundedB>
        </div>
        <div className="pt-28 mx-[700px]">
          <RoundedC>
            <p>fffffffff</p>
          </RoundedC>
        </div>
        <div className="pt-28 mx-[700px]">
          <RoundedD />
            
          
        </div>
        <div className="pt-28 mx-[700px]">
          <RoundedE />
        </div>
        <div className="pt-28 mx-[700px]">
          <RoundedE />
        </div>
      </div>
      <Section />
      <div className="h-screen bg-red-100"></div>
    </div>
  );
};

export default page;
