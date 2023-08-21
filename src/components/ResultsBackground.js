import React, { forwardRef } from 'react';
import pop1 from '../assets/resultsbackground/rippl_pop_1.png';
import pop2 from '../assets/resultsbackground/rippl_pop_2.png';
import pop3 from '../assets/resultsbackground/rippl_pop_3.png';

const ResultsBackground = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img
        alt="funny pop"
        src={pop1}
        className="fixed h-[250px] md:h-[300px] top-[140px] lg:top-[300px] left-[-150px] md:left-[-100px xl:left-[100px]"
      />
      <img
        alt="funny pop"
        src={pop2}
        className="fixed h-0 lg:h-[200px] xl:h-[260px] top-[150px] right-[150px] 2xl:right-[300px]"
      />
      <img
        alt="funny"
        src={pop3}
        className="fixed h-[350px] md:h-[500px] top-[620px] right-[-200px] lg:right-[-100px] 2xl:right-[50px] "
      />
    </div>
  );
});

export default ResultsBackground;
