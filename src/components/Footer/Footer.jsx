import React from "react"
import logo1 from "../pic/f_logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                <div className='img'>
                    <img className="footer-img" src={logo1} alt='' />
                    <h4>Fazaly</h4>
                </div>
                <p>Copyright © 2022 - All right reserved by Fazaly Rabbi.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;