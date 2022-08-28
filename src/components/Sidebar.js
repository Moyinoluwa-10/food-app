import React from 'react'
import '../styles/sidebar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome, faNoteSticky, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/svg/logo.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        
        <div><img src={Logo} alt='logo' /></div>

        <div className='menu-container'>
            <div className='menu active'><FontAwesomeIcon icon={faHome} className='icon' /> <p>Dashboard</p></div>
            <div className='menu'><FontAwesomeIcon icon={faUser} className='icon' /> <p>Your profile</p></div>
            <div className='menu'><FontAwesomeIcon icon={faNoteSticky} className='icon' /> <p>Orders</p></div>
            <div className='menu'><FontAwesomeIcon icon={faCartShopping} className='icon' /> <p>Your Cart</p></div>
        </div>
    </div>
  )
}

export default Sidebar