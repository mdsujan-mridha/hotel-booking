import React from 'react';
import "./FeaturesItems.css";
const FeaturesItems = ({props}) => {
    const{img,name,properties}=props;
    return (
        <section className='features-content'>
             <img src={img} alt="" className='features-img' />
             <div className="features-title">
                <h1> {name} <br/> <span>{properties}</span> </h1>
               
             </div>
        </section>
    );
};

export default FeaturesItems;