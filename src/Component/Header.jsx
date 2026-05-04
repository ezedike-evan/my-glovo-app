import React from 'react'
import "../Component/CSS/Headder.css"
const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='headerHolder'>
            <div className='glovoLogo'>
                <img src="/logo.png" alt="logo" />
            </div>

            <div className='loginHolder'>
                <button>Login</button>
            </div>
 
        </div>
    </div>
  )
}

export default Header