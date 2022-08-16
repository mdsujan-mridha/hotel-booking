import React, { useState } from 'react';
import "./Header.css";
import { FaBed } from "react-icons/fa"
import { IoAirplane } from "react-icons/io5"
import { AiFillCar, AiOutlineCalendar } from "react-icons/ai"
import { BiTaxi } from "react-icons/bi"
import { MdOutlinePerson } from "react-icons/md"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const navigate = useNavigate()
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }
  const handleSearch =()=>{
    navigate("/hotel",{state:{destination,date,options}});
  }
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
                            <FaBed className='header-icon' />
                            <input onChange={e=>setDestination(e.target.value)} type="text" name="text" id="1" placeholder='Where you are going?' className='header__search-input' />
                        </div>
                        <div className="header__search-items">
                            <AiOutlineCalendar className='header-icon' />
                            <span onClick={() => setOpenDate(!openDate)} className='header-search-text'> {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`} </span>
                            {
                                openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    mainDate={new Date()}
                                />
                            }
                        </div>
                        <div className="header__search-items">
                            <MdOutlinePerson className='header-icon' />
                            <span onClick={()=>setOpenOptions(!openOptions)} className='header-search-text'> {`${options.adult} adult . ${options.children} children . ${options.room}  room`} </span>
                            {
                                openOptions && <div className="options">
                                <div className="options-items">
                                    <span className="options-text"> Adult </span>
                                    <div className="option-counter-btn">
                                        <button 
                                        disabled={options.adult <=1} 
                                        onClick={() => handleOption("adult", "d")} 
                                        className="option-count-bnt"> - </button>
                                        <span className="option-counter-Number"> {options.adult} </span>
                                        <button onClick={() => handleOption("adult", "i")} className="option-count-bnt"> + </button>
                                    </div>
                                </div>
                                <div className="options-items">
                                    <span className="options-text"> Children </span>
                                    <div className="option-counter-btn">
                                        <button 
                                        disabled={options.children <=0}  
                                        onClick={() => handleOption("children", "d")} className="option-count-bnt"> - </button>
                                        <span className="option-counter-Number"> {options.children} </span>
                                        <button onClick={() => handleOption("children", "i")} className="option-count-bnt"> + </button>
                                    </div>
                                </div>
                                <div className="options-items">
                                    <span className="options-text"> Room </span>
                                    <div className="option-counter-btn">
                                        <button 
                                        disabled={options.room <=1} 
                                        onClick={() => handleOption("room", "d")} 
                                        className="option-count-bnt"> - </button>
                                        <span className="option-counter-Number"> {options.room} </span>
                                        <button 
                                        onClick={() => handleOption("room", "i")} 
                                        className="option-count-bnt"> + </button>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                        <div className="header__search-items">
                            <button onClick={handleSearch} className="header-btn"> search </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;