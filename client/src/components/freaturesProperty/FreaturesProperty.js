import React from 'react';
import aprtImg from "../img/Home-love/aparthotel.jpg";
import luxryImg from "../img/Home-love/luxry.jpg";
import villaImg from "../img/Home-love/Villa-Wellness.jpg";
import zokuImg from "../img/Home-love/Zoku-Amsterdam.jpg";
import "./FreaturesProperty.css";

const freaturesProperty = () => {
    return ( 
        <section className='fpMain'>
            <div className="fp">
            <div className="fpItem">
                    <img src={aprtImg} alt="" className="fpImg" />
                    <span className="fpName">Apartment Stare Miasto <br/></span>
                    <span className="fpCity">Dhaka <br/> </span>
                    <span className="fpPrice">Starting from $120 <br/> </span>
                    <div className="ratting">
                        <button>8.9</button>
                        <span>Excellent</span>
                        <span className='reviews'>12320 Reviews</span>
                    </div>
                </div>
                <div className="fpItem">
                    <img src={luxryImg} alt="" className="fpImg" />
                    <span className="fpName">Apartment Stare Miasto <br/> </span>
                    <span className="fpCity">Dhaka <br/></span>
                    <span className="fpPrice">Starting from $120<br/></span>
                    <div className="ratting">
                        <button>8.9</button>
                        <span>Excellent</span>
                        <span className='reviews'>12320 Reviews</span>
                    </div>
                </div>
                <div className="fpItem">
                    <img src={villaImg} alt="" className="fpImg" />
                    <span className="fpName">Apartment Stare Miasto <br/></span>
                    <span className="fpCity">Dhaka <br/></span>
                    <span className="fpPrice">Starting from $120 <br/></span>
                    <div className="ratting">
                        <button>8.9</button>
                        <span>Excellent</span>
                        <span className='reviews'>12320 Reviews</span>
                    </div>
                </div>
                <div className="fpItem">
                    <img src={zokuImg} alt="" className="fpImg" />
                    <span className="fpName">Apartment Stare Miasto <br/> </span>
                    <span className="fpCity">Dhaka <br/></span>
                    <span className="fpPrice">Starting from $120 <br/></span>
                    <div className="ratting">
                        <button>8.9</button>
                        <span>Excellent</span>
                        <span className='reviews'>12320 Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default freaturesProperty;