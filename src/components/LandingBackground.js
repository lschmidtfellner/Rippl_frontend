import React from 'react'
// import landingInner from '../assets/landinganimation/rippl_ring_inner.png'
// import landingMiddle from '../assets/landinganimation/rippl_ring_middle.png'
// import landingOuter from '../assets/landinganimation/rippl_ring_outerAsset.png'

import ringImg from '../assets/landingbackground/rippl_ring_full.png'
import ring2 from '../assets/landingbackground/rippl_ring_2.png'
import ring3 from '../assets/landingbackground/rippl_ring_3.png'

function LandingAnimation() {
  return (
    // <div className="relative">
    //     <img
    //       style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: 'auto' }}
    //       src={landingOuter}
    //       alt="outer-ring"
    //     />
    //     <img
    //       style={{ position: 'absolute', top: '80px', left: '80px', width: '400px', height: 'auto' }}
    //       src={landingMiddle}
    //       alt="middle-ring"
    //     />
    //     <img
    //       style={{ position: 'absolute', top: '180px', left: '180px', width: '160px', height: 'auto' }}
    //       src={landingInner}
    //       alt="inner-ring"
    //     />
    // </div>
    <div>
      <img
        className="fixed top-60 right-[-140px] md:right-[100px] md:top-[400px] lg:top-[500px] lg:left-auto lg:right-[100px] xl:right-[220px] 2xl:right-[400px] h-[400px] md:h-[550px] lg:h-[800px]"
        src={ringImg}
        alt='funny rippl'
      ></img>
      <img
        className="fixed h-0 w-auto lg:h-[500px] right-[-80px] lg:right-[-200px] top-[50px]"
        src={ring3}
        alt='funny rippl'
      ></img>
      <img
        className="fixed top-[50px] left-[-130px] md:left-[-150px] lg:left-[70px] md:top-20 lg:top-12 h-[200px] md:h-[300px]"
        src={ring2}
        alt='funny rippl'
      ></img>
    </div>
  )
}

export default LandingAnimation
