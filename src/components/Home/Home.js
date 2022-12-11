import React from 'react';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;