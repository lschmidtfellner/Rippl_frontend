import React, { forwardRef } from 'react';
import pop1 from '../assets/resultsbackground/rippl_pop_1.png';
import pop2 from '../assets/resultsbackground/rippl_pop_2.png';
import pop3 from '../assets/resultsbackground/rippl_pop_3.png';

const ResultsBackground = forwardRef((props, ref) => {
  return (
    <div className='relative' ref={ref}>
      <img
      draggable="false"
        alt="funny pop"
        src={pop1}
        className="fixed h-[250px] md:h-[300px] top-[140px] lg:top-[300px] left-[-80px] md:left-[-100px xl:left-[100px]"
      />
      <img
      draggable="false"
        alt="funny pop"
        src={pop2}
        className="fixed h-0 lg:h-[200px] xl:h-[260px] top-[150px] right-[150px] 2xl:right-[300px]"
      />
      <img
      draggable="false"
        alt="funny"
        src={pop3}
        className="fixed h-[350px] md:h-[500px] xl:h-[700px] top-[550px] right-[-180px] lg:right-[-100px] xl:right-[0px] 2xl:right-[100px] "
      />
    </div>
  );
});

export default ResultsBackground;
