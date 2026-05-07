import React from 'react'
import"../Component/CSS/Category.css"

const Category = () => {
  return (
    <div className='categoryContainer'>
      <p className='categoryWrapper'>Top categories</p>
      <div className='categoryButton'>
        <button>Breakfast</button>
        <button>Burgers</button>
        <button>Healthy</button>
        <button>indian</button>
        <button>Nigerian</button>
        <button>pastries</button>
        <button>pizza</button>
        <button>suchi</button>
      </div>
      <div>
      <button className='categoryBrowserButton'>All categories</button>
    </div>
    </div>
  )
}

export default Category