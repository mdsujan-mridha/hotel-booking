import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import PropertyList from '../propertyList/PropertyList';
import FreaturesProperty from "../freaturesProperty/FreaturesProperty"
import "./Home.css";
import MailList from '../mailList/MailList';
import Footer from '../../pages/Footer/Footer';

const Home = () => {
    return (
       <section>
         <Header /> 
         <div className="home-container">
         <Features />
         <h3 className='property_list-title'> Browse by property type </h3>
         <PropertyList />
         <h3 className='Home_list-title'> Homes guests love  </h3>
         <FreaturesProperty />
         <MailList/>
         <Footer/>
         </div>
       </section>
    );
};

export default Home;