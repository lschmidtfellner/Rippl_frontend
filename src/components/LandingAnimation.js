import React from 'react'
// import landingInner from '../assets/landinganimation/rippl_ring_inner.png'
// import landingMiddle from '../assets/landinganimation/rippl_ring_middle.png'
// import landingOuter from '../assets/landinganimation/rippl_ring_outerAsset.png'

import ringImg from '../assets/landinganimation/rippl_ring_full.png'

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

    <img className='fixed scale-90 top-60 left-32 md:scale-50 md:top-20 lg:top-12 lg:left-auto lg:right-18 xl:right-18 2xl:right-24' src={ringImg}></img>
  )
}

export default LandingAnimation
