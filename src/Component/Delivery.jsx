import React from 'react'
import { delivery } from '../lib/mock'
import "../Component/CSS/delivery.css"

const Delivery = () => {
  return (
    <div className="deliverycontainer">
        <p className='deliveryTitle'>Anything deliverd</p>
        <div className='deliVeryHolder'>
            {delivery.map((deliveries , index)=>(
                <div key={index}>
                    <div className='delivery'>
                        <img src={deliveries.deliveryImg} alt="" />
                        <p className='deliveryTitle'>{deliveries.deliveryTitle}</p> 
                        <p className='deliveryName'>{deliveries.deliveryName}
                        <span className='span1'>{deliveries.deliveryTag}</span>
                        <span>{deliveries.deliveryNames}</span>
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
          <button>explore stores around you</button>
    </div>
  )
}

export default Delivery