import React from 'react';
import "./Home.css";
import FirstSection from './Section1';
// import SecondSection from './Section2';
// import ThirdSection from './Section3';
import Slideshow from './Slider';
import FourthSection from './Section4';
import FifthSection from './Section5';
import SixthSection from './Section6';
import SeventhSection from './Section7';
import EigthSection from './Section8';
import Testimonies from './Testimonial';

const Home = () => {
    return ( 
        <div className='section1'>
            <FirstSection />
            {/* <SecondSection /> */}
            {/* <ThirdSection /> */}
            <Slideshow />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <Testimonies />
            <EigthSection />
        </div>
    );
}
 
export default Home;
