import React from 'react'
import "../Component/CSS/Headder.css"
const Header = () => {
  return (
    <header className='headerContainer'>
        <div className='headerHolder'>
            <div className='glovoLogo'>
                <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/28a67897-50c3-452e-8c24-e9d7f910dd41.svg" alt="logo" />
            </div>

            <div className='loginHolder'>
                <span><button><img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/a1b3cc6e-0cfa-470d-8d0f-a2157c4d17e9.svg" alt="" className='logoImg' /> Login</button></span>
            </div>
 
        </div>
    </header>
  )
}

export default Header