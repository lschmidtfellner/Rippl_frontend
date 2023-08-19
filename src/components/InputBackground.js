import React from 'react'
import wave1 from '../assets/inputbackground/rippl_wave_1.png'
import wave2 from '../assets/inputbackground/rippl_wave_2.png'
import wave3 from '../assets/inputbackground/rippl_wave_3.png'

function InputBackground() {
  return (
    <div>
      <img alt='funny wave' src={wave1} className='fixed h-[220px] right-[-100px] top-[0px]'></img>
      <img alt='funny wave' src={wave2} className='fixed h-[100px] left-[-60px] top-[300px]'></img>
    </div>
  )
}

export default InputBackground