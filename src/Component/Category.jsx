import React, { useEffect, useState } from 'react'
import"../Component/CSS/Category.css"
import { categories } from '../lib/mock'

const Category = () => {
  const [resurantCategories, setResurantCategories] = useState([])
  const [item, setItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(categories)

  useEffect(()=>{
    const newCategories = categories.map((category)=>category.category)
    setResurantCategories(prev=>[...new Set([...prev, ...newCategories])])
  },[categories])

  const handleCategories = (item)=>{
    setItem(item)
    const selected = categories.filter((list)=>list.category === item)
    setSelectedCategory(selected)
  }

  const handleAll = ()=>{
    setSelectedCategory(categories)
  }

  return (
    <div className='categoryContainer'>
      <p className='categoryWrapper'>Top categories</p>
      <div className='categoryButton'>
        {
          resurantCategories.map((resurantCategoryText, index)=>(
            <button key={index} onClick={()=>handleCategories(resurantCategoryText)}>
              {resurantCategoryText}
            </button>
          ))
        }
      </div>
      <div>
        <button className='categoryBrowserButton' onClick={()=>handleAll()}>All categories</button>
      </div>
      <div>
        {
          selectedCategory.map((category, index)=>(
            <div key={index}>
              <img src={category.resurantImg} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category