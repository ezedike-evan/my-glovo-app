import React from 'react'
import { body } from '../lib/mock'
import"../Component/CSS/Body.css"

const Body = () => {
  return (
    <div className='bodyContainer'>
      <div>
        <img src= "src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/hands.1b6e6913.svg" alt=""  className='img-download'/>
        <p className='bodyTitle'>Let's do it together</p>
          </div>
        <div className='bodyHolder'>
          {body.map(( titles, index)=>(
            <div key={index} className='bodyWrapper'>
                <img src= {titles.bodyImg} alt="" /> 
                <p className='bodyTitles'>{titles.bodyTitle}</p>
                <p>{titles.bodyText}</p>
                <button>{titles.bodyButton}</button>
            </div>
          
          ))}
        </div>
    </div>
  )
}

export default Body