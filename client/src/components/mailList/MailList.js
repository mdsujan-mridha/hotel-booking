import React from 'react';
import "./MailList.css";
const MailList = () => {
    return (
        <section className='mail-container'>
            <div className="mailList">
                <span className="mailList-title">
                Save time, save money!
                </span>
                <span className='mail_desc'> Sign up and we'll send the best deals to you  </span>
                <div className="inputContainer">
                    <input type="email" name="email" id="1" placeholder='Your Email' className='subscribe-input'/>
                    <input type="submit" value="Subscribe"  className='subscribe-btn'/>
                </div>
            </div>
        </section>
    );
};

export default MailList;