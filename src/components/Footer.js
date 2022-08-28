import React from 'react'
import '../styles/footer.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/fontawesome-free-brands'
import GoogleIcon from '../assets/svg/google.svg'
import AppleIcon from '../assets/svg/apple.svg'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='top-container'>

            <div>
                <ul>
                    <li><span className='link-header'>Company</span></li>
                    <li><Link to={'/'}>About Us</Link></li>
                    <li><Link to={'/'}>Careers</Link></li>
                    <li><Link to={'/'}>Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><span className='link-header'>Support</span></li>
                    <li><Link to={'/'}>Help Center</Link></li>
                    <li><Link to={'/'}>Safety Center</Link></li>
                    <li><Link to={'/'}>Contact Us</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><span className='link-header'>Legal</span></li>
                    <li><Link to={'/'}>Cookies Policy</Link></li>
                    <li><Link to={'/'}>Privacy Policy</Link></li>
                    <li><Link to={'/'}>Terms of Service</Link></li>
                    <li><Link to={'/'}>Dispute Resolution</Link></li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><span className='link-header'>Install App</span></li>
                    <li><Link to={'/'}><img src={GoogleIcon} alt='Google Icon' style={{marginBottom: '5px'}}></img></Link></li>
                    <li><Link to={'/'}><img src={AppleIcon} alt='Apple Icon'></img></Link></li>
                </ul>
            </div>

        </div>

        <div className='bottom-container'>
            <div><p>&copy; 2021 LILIES, All rights reserved</p></div>
            <div className= 'icon-group'>
                <Link to={'/'}><FontAwesomeIcon icon={faInstagram} className='icons' /></Link>
                <Link to={'/'}><FontAwesomeIcon icon={faTwitter} className='icons' /></Link>
                <Link to={'/'}><FontAwesomeIcon icon={faYoutube} className='icons' /></Link>
            </div>
        </div>


    </div>
  )
}

export default Footer