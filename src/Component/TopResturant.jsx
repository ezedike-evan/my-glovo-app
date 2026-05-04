import React from 'react'
import { topResturants } from '../lib/mock'
import"../Component/CSS/topResturant.css"

const TopResturant = () => {
  return (
    <div className='resturantContainer'>
      <p className='title1'>Top resturant and more in Nigeria</p>
      <div className='resturantHolder'>
        { topResturants.map(( items , index) =>(
          <div key={index}>
            <div className='resturant'>
              <img src={items.resurantImg} alt="" />
              <p>{items.resuturantname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopResturant