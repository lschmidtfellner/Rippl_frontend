import React, { useState, useEffect, forwardRef } from 'react'
import CircleType from 'circletype'
import arrow from '../assets/rippl_next_btn.svg'

const GetRecsBtn = forwardRef((props, ref) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const [isClicked, setIsClicked] = useState(false)
  const textUnit = 'GET RECS ~ '
  const repetitions = 4
  const text = textUnit.repeat(repetitions)

  useEffect(() => {
    const circleDiv = ref.current.firstChild
    if (circleDiv) {
      const circleType = new CircleType(circleDiv)
      circleType.radius(60)
    }
  }, [text, ref])

  const handleButtonClick = async () => {
    setIsClicked(true);
    await delay(200); // Wait for 200ms
    setIsClicked(false);
    await delay(200); // Wait for another 200ms
    if (props.onClick) props.onClick();
};

  return (
    <div
      ref={ref}
      onClick={handleButtonClick}
      className='pb-20'
      style={{
        transform: isClicked ? 'scale(0.9)' : 'scale(1)',
        transition: 'transform 0.3s',
        transformOrigin: '8% 20%'
      }}
    >
      <div
        className={`arrow-container font-proxima font-bold flex items-center justify-center mt-20 cursor-pointer ${
          isClicked ? 'clicked' : ''
        }`}
        style={{
          marginLeft: '20px',
          borderRadius: '50%',
          border: '2px solid black',
          background: isClicked ? 'black' : '',
          fontSize: '0.74rem',
          width: '80px',
          height: '80px',
          animation: 'rotate 15s linear infinite',
          transition: 'ease 0.3s'
        }}
      >
        {text}
        <style jsx>{`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .arrow-container.clicked {
            background-color: black;
            color: white; // Assuming you want the text color to be white when the background is black
            transition: background-color 0.3s;
          }
        `}</style>
      </div>
      <img
        className="h-6"
        style={{ transform: 'translate(47px, -51px)',
        stroke: isClicked ? '#80DDCB' : 'black' }}
        src={arrow}
        alt="Arrow"
      />
    </div>
  )
})

export default GetRecsBtn
