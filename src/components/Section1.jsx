import React from 'react'
import "./Section1.css";
import pic1 from "./images/iphoneClose.png";
import pic2 from "./images/trades.jpg";
import pic3 from "./images/iphoneLight1.png";

const FirstSection = () => {
    return ( 
        <div className="fSec" style={{display: "flex",flexDirection: "row"}}>
            <div className='about'>
                <div className="info drop-down">
                    <h1 className='zoom-in' style={{textDecoration: "wavy", paddingTop: "2rem", letterSpacing: "1.5px", color: "#06283D", fontFamily: "Dancing Script", fontSize: "3rem"}}>
                    Our CEO, Cryptocurrency Master, Developer Himself
                    </h1>
                    <h1 className='uppercase' style={{textDecoration: "underline", textDecorationColor: "darkslategray"}}>
                        Our Mission Statement
                    </h1>
                    <h3>
                    We're building the future of finance. Blockchain is the most trusted and fastest growing crypto company, helping millions across the globe : from single individuals to the largest institutions to having an easy and safe way to access cryptocurrency.
                    </h3>
                    <h1 className='uppercase one' style={{textDecoration: "underline", textDecorationColor: "darkslategray"}}>
                        Our Vision Statement
                    </h1>
                    <h3 style={{marginBottom: "35px"}}>
                    We believe economic freedom is the foundation of peace and prosperity, and by creating more of it for people, we are reducing suffering in the world. Our mission is to help everyone, everywhere be more economically free.    
                    </h3>
                    <button>
                        <li id="goat">SEE OUR SPACES</li>
                    </button>
                </div>
            </div>
            <div className="pic">
                <img className='animate__animated animate__slideInRight' src={pic2} alt="iyi's pic" />
            </div>
        </div>
     );
}
 
export default FirstSection;