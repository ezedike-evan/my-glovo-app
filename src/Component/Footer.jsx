import React from 'react'
import"../Component/CSS/Footer.css"


const Footer = () => {
    return (
        <footer className='footerContainer'>
            <img src= "/logo.png" alt="" className='img-download'/>
            <div className='wrapper'>
                <div>
                    <p className='boldText'>Let's do it together</p>
                    <p>Careers</p>
                    <p>Glovo for partners</p>
                    <p>couriers</p>
                    <p>Glovo business</p>
                </div>
                <div>
                    <p className='boldText'>Links of interest</p>
                    <p> About us</p>
                    <p>FAQ</p>
                    <p>Glovo prime</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Security</p>
                    <p>Log in</p>
                </div>
                <div>
                    <p className='boldText'>Follow us</p>
                    <p>instagram</p>
                    <p>Tiktok</p>
                </div>
                <section className='legals'>
                    <div className='botton'>
                        <button className='btn-holder'>
                            Download in the <span>app store</span>
                        </button>
                        <button className='btn-holder'>
                            get it now <span>google play</span>
                        </button>
                    </div>
                    <div> 
                        <p>Terms and conditions</p>
                        <p>PrivacyPolicy</p>
                        <p>CookiesPolicy</p>
                        <p>Compliance</p>
                        <p>Configure the cookies</p>
                        <p>Digital Services Act</p>
                        <p>European Accessibility Act</p> 
                    </div>
                </section>
            </div>
                <div className='list'>
                    <div className='listText'>
                        <p className='boldText'>Top categories:Nigeria</p>
                        <p>Breakfast Burger Healthy Indian Nigerian pizza Suchi </p>
                        <p>All categories</p>
                    </div>
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">icdcskhsb</option>
                        <option value="">Bosanski</option>
                        <option value="">Catala</option>
                        <option value="">Espanol</option>
                        <option value="">Euskara</option>
                        <option value="">Francais</option>
                        <option value="">Hrvatski</option>
                        <option value="">fjoggro</option>
                        <option value="">Italiano</option>
                        <option value="">ifhuftui</option>
                        <option value="">Ka3ak</option>
                        <option value="">KbiprbI34a</option>
                        <option value="">Polski</option>
                        <option value="">Portugues</option>
                        <option value="">Romana</option>
                        <option value="">PycckNN</option>
                        <option value="">CpnckN</option>
                        <option value="">YkpaIHcbka</option> 
                    </select>
                </div>
        </footer>
    )
}

export default Footer