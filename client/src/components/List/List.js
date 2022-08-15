import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { format } from "date-fns"
import "./List.css";
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem/SearchItem';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location?.state?.destination);
    const [date, setDate] = useState(location?.state?.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location?.state?.options);
    return (
        <div>

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="searchTitle">Search</h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="listItem">
                            <label>Check in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                            {
                                openDate && (
                                    <DateRange onChange={(item) => setDate([item.selection])}
                                        minDate={new Date()}
                                        ranges={date}
                                    >
                                    </DateRange>
                                )
                            }
                        </div>
                        <div className="listItem">
                            <label>Options</label>
                            <div className="lsOptions">
                            <div className="lsOptionItem">
                                <span className="lsOptionText"> Min price <small>per night</small> </span>
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText"> Max price <small>per night</small> </span>
                                <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText"> Adult </span>
                                <input type="number" className="lsOptionInput" min={1}  placeholder={options.adult}/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText"> Children <small>per night</small> </span>
                                <input type="number" className="lsOptionInput" min={0}  placeholder={options.children}/>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText"> Room  </span>
                                <input type="number" className="lsOptionInput" min={1} placeholder={options.room} />
                            </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult"> 
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                     <SearchItem/>
                    
                     </div>
                </div>
            </div>
        </div>
    );
};

export default List;