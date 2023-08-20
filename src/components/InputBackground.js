import React from 'react'
import wave1 from '../assets/inputbackground/rippl_wave_2.png'
import wave2 from '../assets/inputbackground/rippl_wave_4.png'
import wave3 from '../assets/inputbackground/rippl_wave_3.png'
import wave4 from '../assets/inputbackground/rippl_wave_1.png'

function InputBackground() {
  return (
    <div>
      <img
        alt="funny wave"
        src={wave3}
        className="fixed h-[180px] md:h-[300px] right-[-60px] md:right-[-200px] lg:right-[-50px] xl:right-[-150px] 2xl:right-[200px] top-[40px]"
      ></img>
      <img
        alt="funny wave"
        src={wave1}
        className="fixed h-[100px] xl:h-[00px] left-[150px] xl:left-[350px] top-[300px] xl:top-[350px]"
      style={{rotate: '-20deg'}}></img>
      <img
        alt="funny wave"
        src={wave2}
        className="fixed h-[300px] right-[0px] md:right-auto md:left-[200px] xl:left-[400px] 2xl:left-[500px] top-[640px] xl:top-[570px]"
      ></img>
      <img
        alt="funny wave"
        src={wave4}
        className="fixed h-0 w-auto 2xl:h-[200px] right-[-100px] top-[420px]"
        style={{rotate: '10deg'}}
      ></img>
    </div>
  )
}

export default InputBackground
