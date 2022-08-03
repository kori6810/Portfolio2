import React from 'react'
import Call from '../../assets/call.png'
import Email from '../../assets/email.png'
import Address from '../../assets/map.png'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__map"></div>
      <div className="contact__contact">
        <h1 className="contact__header">Contact me</h1>
        <div className="contact__dataWrapper">
          
          <div className="contact__number-box">
            <img src={Call} alt="call" className="contact__icon" /> Number: 010-2251-6810
          </div>
          <div className="contact__number-box">
            <img src={Email} alt="call" className="contact__icon" /> Email: mr.sirojiddin4016810@gmail.com
          </div>
          <div className="contact__number-box">
            <img src={Address} alt="call" className="contact__icon" /> Address: Gachon University
          </div>
        </div>
      </div>
    </div>
  )
}
