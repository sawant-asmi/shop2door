import React from 'react';
import CartContainer from './CartContainer';


const AboutContainer = () => {
  
  return (
    
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
        About Us
      </p>

      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        We deliver all fresh and healthy fruits and vegetables as well as groceries
          to your location on time. Order your items from a desired local store
          near you.
      </p>
      {/*<p className="text-[1.5rem] lg:text-[2.5rem] text-center font-semibold tracking-wide text-headingColor">
        Who we are
  </p>*/}
    
    </div>
  );
};

export default AboutContainer;