import React from 'react';
import "./Section2.css"
import btc from "./images/bitcoin-logo.png";
import eos from "./images/eoslogo.png";
import dash from "./images/Dash.png";
import usdc from "./images/usdcoin.webp";
import eth from "./images/ethereum.png";
import stellar from "./images/stellar.png";
import cardano from "./images/Cardano_Logo.png";
import ripp from "./images/ripple_logo.png";
import doge from "./images/Dogecoin-logo.png";


const SecondSection = () => {
    return ( 
        <div className="tank">
            <img className='btc' 
                data-aos="zoom-out-down"
                data-aos-duration="2000"
                data-aos-delay="100"
            src={btc} alt="btc.logo" />
            <img className='eos' 
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={eos} alt="eos.logo" />
            <img className='dash' 
                data-aos="fade-down-right"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={dash} alt="dash.logo" />
            <img className='usdc'
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={usdc} alt="usdc.logo" />
            <img className='eth' 
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={eth} alt="eth.logo" />
            <img className='stel'
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={stellar} alt="stellar.logo" />
            <img className='card'
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={cardano} alt="cardano.logo" />
            <img className='rip'
                data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={ripp} alt="ripp.logo" />
            <img className='doge' 
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-delay="200"
            src={doge} alt="doge.logo" />
        </div>
     );
}
 
export default SecondSection;