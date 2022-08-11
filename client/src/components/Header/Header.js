import React from 'react';
import "./Header.css";
import { FaBed } from "react-icons/fa"
import { IoAirplane } from "react-icons/io5"
import { AiFillCar, AiOutlineCalendar } from "react-icons/ai"
import { BiTaxi } from "react-icons/bi"
import { MdOutlinePerson } from "react-icons/md"

const Header = () => {
    return (
        <section>
            <div className="header">
                <div className="header-container">
                <div className="header-list">
                    <div className="header__list-items active">
                        <FaBed />
                        <span> Stays </span>
                    </div>
                    <div className="header__list-items">
                        <IoAirplane />
                        <span> Flights </span>
                    </div>
                    <div className="header__list-items">
                        <AiFillCar />
                        <span> Car rentals </span>
                    </div>
                    <div className="header__list-items">
                        <FaBed />
                        <span> Attractions </span>
                    </div>
                    <div className="header__list-items">
                        <BiTaxi />
                        <span> Airport taxi </span>
                    </div>
                </div>
                <div className='header-content'>
                    <h1 className="header-title"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
                    <p className="header-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum molestias suscipit amet odit vel!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nesciunt?
                    </p>
                    <button className="header-btn">Sign in / Register</button>
                </div>
                   <div className="header-search">
                     <div className="header__search-items">
                         <FaBed className='header-icon'/>
                        <input type="text" name="text" id="1" placeholder='Where you are going?' className='header__search-input'/> 
                     </div>
                     <div className="header__search-items">
                         <AiOutlineCalendar className='header-icon'/>
                       <span className='header-search-text'> date to date </span>
                     </div>
                     <div className="header__search-items">
                         <MdOutlinePerson className='header-icon'/>
                        <span className='header-search-text'> 2 adults 2 children 1 room </span>
                     </div>
                     <div className="header__search-items">
                         <button className="header-btn"> search </button>
                     </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Header;