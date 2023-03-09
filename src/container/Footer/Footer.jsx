import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Tamale along tamale teaching hospital</p>
          <p className='p__opensans'>+233 55 789 8494</p>
          <p className='p__opensans'>+233 20 789 7680</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer logo" />
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt="spoon" className='spoon__image' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>

        </div>
      </div>
      <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00am-12:00am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am-11:00am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 KFC. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
