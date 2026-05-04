import React from 'react'
import Header from "../src/Component/Header"
import Hero from "../src/Component/Hero"
import TopResturant from"../src/Component/TopResturant"
import Delivery from './Component/Delivery'
import TopCity from './Component/TopCity'
import Category from './Component/Category'
import Section from './Component/Section'
import Body from './Component/Body'
import Footer from './Component/Footer'
const App = () => {
  return (
    <>
      <Header />  
      <Hero />
      <TopResturant />
      <Delivery />
      <TopCity />
      <Category />
      <Section /> 
      <Body />
      <Footer />
    </>
  )
}

export default App