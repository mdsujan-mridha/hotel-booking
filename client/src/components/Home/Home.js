import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import "./Home.css";

const Home = () => {
    return (
       <section>
         <Header /> 
         <div className="home-container">
         <Features />
         
         </div>
       </section>
    );
};

export default Home;