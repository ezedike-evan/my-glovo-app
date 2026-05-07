import React from 'react'
import"../Component/CSS/Footer.css"


const Footer = () => {
    return (
        <footer className='footerContainer'>
            <img src= "src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/28a67897-50c3-452e-8c24-e9d7f910dd41.svg" alt="" className='footerGlovoLogo'/>
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
                        <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/ios-button.33217f86.svg" />
                        <img src="src/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/download-button-new.svg" alt="" />
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