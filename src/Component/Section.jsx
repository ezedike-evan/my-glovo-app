import React from 'react'
import "../Component/CSS/Section.css"


const Section = () => {
  return (
    <div className='downloadSection'>
       <div>
         <img src= "src/assets/glovo logo.png" alt=""  className='img-download'/>
         <p className='text1'>Download the app</p>
         <p className='text2'>order anyrhing and track it in real time with glovo app </p>
         <button className='btn-holder'>Download in the <span>app store</span></button>
         <button className='btn-holder'>get it now <span>google play</span></button>
       </div>
       <div>
        <img src="src/assets/images.jpg" alt="" />
       </div>
    </div>
  )
}

export default Section