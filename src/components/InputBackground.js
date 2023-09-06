import React, { forwardRef } from 'react'
import wave1 from '../assets/inputbackground/rippl_wave_2.png'
import wave2 from '../assets/inputbackground/rippl_wave_4.png'
import wave3 from '../assets/inputbackground/rippl_wave_3.png'

const InputBackground = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img
        draggable="false"
        alt="funny wave"
        src={wave3}
        className="fixed h-[220px] md:h-[300px] xl:h-[360px] right-[-60px] md:right-[-200px] lg:right-[-50px] 2xl:right-[-100px] top-[40px] xl:top-[50px]"
      />
      <img
        draggable="false"
        alt="funny wave"
        src={wave1}
        className="fixed h-[100px] xl:h-[200px] left-[150px] xl:left-[200px] 2xl:left-[400px] top-[300px] xl:top-[350px]"
        style={{ transform: 'rotate(-20deg)' }}
      />
      <img
        draggable="false"
        alt="funny wave"
        src={wave2}
        className="fixed h-[260px] right-[0px] md:right-auto md:left-[200px] xl:left-[400px] 2xl:left-[700px] top-[670px] xl:top-[570px]"
      />
    </div>
  )
})

export default InputBackground
