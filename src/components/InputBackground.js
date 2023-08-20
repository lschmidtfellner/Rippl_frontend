import React, { forwardRef } from 'react';
import wave1 from '../assets/inputbackground/rippl_wave_2.png';
import wave2 from '../assets/inputbackground/rippl_wave_4.png';
import wave3 from '../assets/inputbackground/rippl_wave_3.png';
import wave4 from '../assets/inputbackground/rippl_wave_1.png';

const InputBackground = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img
        alt="funny wave"
        src={wave3}
        className="fixed h-[180px] md:h-[300px] right-[-60px] md:right-[-200px] lg:right-[-50px] 2xl:right-[200px] top-[40px]"
      />
      <img
        alt="funny wave"
        src={wave1}
        className="fixed h-[100px] xl:h-[200px] left-[150px] xl:left-[350px] top-[300px] xl:top-[350px]"
        style={{ transform: 'rotate(-20deg)' }}
      />
      <img
        alt="funny wave"
        src={wave2}
        className="fixed h-[300px] right-[0px] md:right-auto md:left-[200px] xl:left-[400px] 2xl:left-[500px] top-[640px] xl:top-[570px]"
      />
      <img
        alt="funny wave"
        src={wave4}
        className="fixed h-0 w-auto xl:h-[200px] right-[-100px] top-[420px]"
        style={{ transform: 'rotate(10deg)' }}
      />
    </div>
  );
});

export default InputBackground;
