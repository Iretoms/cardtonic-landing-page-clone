import React from 'react';
import Offer from '../components/Offer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Partner from '../components/Partner';

const Home = () => {
    return (
        <>
         <Header/>
         <Hero/>
         <Offer/> 
         <Partner/>  
        </>
    );
};

export default Home;