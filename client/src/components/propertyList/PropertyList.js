import React from 'react';
import "./PropertyList.css";
import hotelPropertyImg from "../img/property/hotel.jpg";
import appartmentPropertyImg from "../img/property/appartment.jpg";
import resortPropertyImg from "../img/property/resotrs.jpg";
import cabinPropertyImg from "../img/property/cabin.jpg";
import vaillasPropertyImg from "../img/property/villas.jpg";

const PropertyList = () => {
    return (
        <section>
           <div className="property">
             <div className="plistItem">
                <img src={hotelPropertyImg} alt=""  className='propertyImg'/>
                <div className="pListItem-title">
                    <h1> Hotel </h1>
                    <p> 123 </p>
                </div>
            </div>
             <div className="plistItem">
                <img src={appartmentPropertyImg} alt=""  className='propertyImg'/>
                <div className="pListItem-title">
                    <h1> Apartments </h1>
                    <p> 130 </p>
                </div>
            </div>
             <div className="plistItem">
                <img src={resortPropertyImg} alt=""  className='propertyImg'/>
                <div className="pListItem-title">
                    <h1> Resorts </h1>
                    <p> 103 </p>
                </div>
            </div>
             <div className="plistItem">
            <img src={cabinPropertyImg} alt=""  className='propertyImg'/>
                <div className="pListItem-title">
                    <h1> Cabin </h1>
                    <p> 100 </p>
                </div>
            </div>
             <div className="plistItem">
                <img src={vaillasPropertyImg} alt=""  className='propertyImg'/>
                <div className="pListItem-title">
                    <h1> Villas </h1>
                    <p> 150 </p>
                </div>
            </div>
           </div>
        </section>
    );
};

export default PropertyList;