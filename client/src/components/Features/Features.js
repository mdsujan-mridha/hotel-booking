import React from 'react';
import "./Features.css";
import dublinImg from "../img/dublin.jpg";
import austrinImg from "../img/austrin.jpg";
import renoImg from "../img/reno.jpg";
import FeaturesItems from './FeaturesItems';

 

const Features = () => {
     const featuresItems = [
        {
          "img":dublinImg,
          "name":"dublin",
          "properties":"553 properties"
        },
        {
          "img":austrinImg,
          "name":"Austrin",
          "properties":"250 properties"
        },
        {
          "img":renoImg,
          "name":"Reno",
          "properties":"100 properties"
        },
     ]
    return (
        <section>
           <div className="features">
            <div className="featured-item">
               {
                 featuresItems?.map(item=><FeaturesItems
                 key={item.index}
                 props={item}
                 ></FeaturesItems>)
               }
            </div>
           </div>
        </section>
    );
};

export default Features;