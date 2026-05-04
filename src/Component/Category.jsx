import React from 'react'

const Category = () => {
  return (
    <div className='topCitiesContainer'>
      <p className='topCitiesWrapper'>Top categories</p>
      <div className='topCitiesButton'>
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
      <button className='browserButton'>All categories</button>
    </div>
    </div>
  )
}

export default Category