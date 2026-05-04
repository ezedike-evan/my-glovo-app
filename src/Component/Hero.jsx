import React from 'react'
import "../Component/CSS/Hero.css"

const Hero = () => {
  return (
     <div className='heroContainer'>
        <div className='heroHolder'>
            <div className='heroLogo'>
                {/* <img src="src/assets/glovo logo.png" alt="logo" /> */}
                <video src="/hero-video.webm" autoPlay loop muted></video>
            </div>

            <div className='inputHolder'>
             <div className='firstinputHolder'>   
                <p className='firstInput'>
                    Food delivery and 
                </p>
                <p>more</p>
                  <p className='secondInput'>Goceries, shops, pharmercies, anything</p>
                </div>
               
                <div className='thirdInput'>
                <input type="text" placeholder="what's your address ? " />
                <span>use current location</span>
               </div>
            </div>
 
        </div>
    </div>
  )
}

export default Hero











// mock.js
// export const top3fg= [
//     {
//         resurantImg: "/asset/sivfnf.png",
//         resutdgname: "the Place"
//     },
//     {}
// ]

// //topRe.jsx
// import toplsdv from "mock.js"
// top3fg.map((resurant, index)=>(
//     // <resurantCard resurant={resurant} key={index}/>
//     <div key={index} style={{position:"relative"}}>
//         <img src={resurant.resurantImg} sty alt="" />
//         {/* <p style={{marginTop:"-10px"}}>{resurant.resutdgname}</p> */}
//         <p style={{position:"absolute", bottom:0}}>{resurant.resutdgname}</p>
//     </div>
// ))