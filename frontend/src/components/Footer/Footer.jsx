import React from 'react'
import './Footer.css'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
const Footer = () => {
    return (
        <div className='footerbg'>
<div className="socialsmedia">
    <div className="fbicon2">
    <FaFacebook size={40}/>
    </div>
<div className="instaicon2">
<FaInstagram size={40}/>
</div>
<div className="twticon2">
<FaTwitter size={40}/>
</div>

</div>
           
            <p>Wallet Tracer © 2022</p>
        </div>
    )
}

export default Footer
