import React from 'react';
import Offer from '../components/Offer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Partner from '../components/Partner';
import Download from '../components/Download';
import News from '../components/News';
import Footer from '../components/Footer';
import Intercom from '../components/Intercom';

const Home = () => {
    return (
        <>
         <Header/>
         <Hero/>
         <Offer/> 
         <Partner/>
         <Download/> 
         <News/> 
         <Footer/>
         <Intercom/>
        </>
    );
};

export default Home;