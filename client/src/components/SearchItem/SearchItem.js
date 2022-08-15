import React from 'react';
import "./SearchItem.css";
import hotelSearchImg from "../img/property/appartment.jpg";

const SearchItem = () => {
    return (
        <div className='searchItem'>
           <img src={hotelSearchImg} alt="" className="searchImg" /> 
           <div className="searchDe">
             
             <h1 className='siTitle'> Towe Street Apartment </h1>
             <span className='searchDistance'>500m from center</span>
             <span className='searchOp'>Free airport taxi</span>
             <span className="searchSubtitle">Studio Apartment with Air condition</span>
             <span className="searchFeatures">
                Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed
             </span>
             <span className="siCancleOp">Free cancellation</span>
             <span className="siCancelSubtitle">
                You can cancel later,so lock this great price tody!
             </span>
             
           </div>
           <div className="searchDetails">
             <div className="siRatting">
                <span>Excellent</span>
                <button>8.9</button>
             </div>
             <div className="siDetails_price">
                <span className="searchPrice">
                    $123
                </span>
                <span className="siTaxOp">
                span.Includes taxes and fees
                </span>
                <button className='siItemBtn'>See availability</button>
             </div>
           </div>
        </div>
    );
};

export default SearchItem;