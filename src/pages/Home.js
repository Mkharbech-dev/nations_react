import React from 'react';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Countries/>
            <Footer />
        </div>
    );
};

export default Home;