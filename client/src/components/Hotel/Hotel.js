import React from 'react';
import hotelImg from "../img/Home-love/Villa-Wellness.jpg";
import hotelImg2 from "../img/property/hotel.jpg";
import hotelImg3 from "../img/property/villas.jpg";
import hotelImg4 from "../img/property/cabin.jpg";
import hotelImg5 from "../img/property/hotel.jpg";
import hotelImg6 from "../img/property/villas.jpg";
import { MdLocationPin } from "react-icons/md";
import "./Hotel.css";
const Hotel = () => {
    const photos = [
        {
            "hotelImg":hotelImg
        },
        {
            "hotelImg":hotelImg2
        },
        {
            "hotelImg":hotelImg3
        },
        {
            "hotelImg":hotelImg4
        },
        {
            "hotelImg":hotelImg5
        },
        {
            "hotelImg":hotelImg6
        }
    ]
    return (
        <section>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className='hotelTitle'> Grand Hotel </h1>
                    <div className="hotelAddress">
                     <MdLocationPin/> 
                     <span>Elton St 125 Green Road Dhaka</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location 500m from center
                    </span>
                    <span className="priceHightLight">
                        Book a stay $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImg">
                        {
                            photos?.map(photo=>(
                                <div className="hotelImgWrapper">
                                    <img src={photo.hotelImg} alt="" className="hotelImgs" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1> Stay in the heart of Krakow </h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aliquam? Obcaecati recusandae cumque, debitis placeat eaque dolorem inventore voluptates nisi deleniti distinctio natus mollitia laborum provident error rerum atque dicta iusto quas dignissimos repudiandae. Ipsa temporibus ut labore aliquid autem.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                           <h1>Perfect for a9-night stay!</h1>
                           <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit earum cumque minus ipsum asperiores tenetur. </span>
                           <h2> <b>$945</b> (9 night) </h2>
                           <button> Reserve or Book Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hotel;