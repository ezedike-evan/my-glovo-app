import React from 'react'
import "../Component/CSS/Section.css"


const Section = () => {
  return (
    <div className='downloadSection'>
      <div className='downloadHolder'>
        <img src= "src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/download-icon.475cc763.svg" alt=""  className='img-download'/>
        <p className='text1'>Download the app</p>
        <p className='text2'>order anyrhing and track it in real time with glovo app </p>
        <div>
          <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/ios-button.33217f86.svg" alt="" />
          <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/google-button.4b60c502.svg" alt="" />
        </div>
      </div>
      <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/download-app-new.2d9bc196.png" alt=""  className='phoneImg'/>
    </div>
  )
}

export default Section