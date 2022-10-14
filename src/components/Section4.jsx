import React from 'react';
import "./Section4.css";
// import eth from "./logo/icons8-ethereum-96.png";
// import btc from "./logo/icons8-bitcoin-96.png";
// import xrp from "./logo/icons8-xrp-85.png";
// import dgc from "./logo/icons8-dogecoin-85.png";
// import teh from "./logo/icons8-tether-85.png";
import invest from "./logo/invest.png";
import trade from "./logo/trade.png";
import signup from "./logo/sign-up.png";
import visa from "./logo/visa.png";
import paypal from "./logo/paypal.png";
import apple from "./logo/apple-pay.png";
import amazon from "./logo/amazon-pay.png";
import mastercard from "./logo/mastercard.svg";
import google from "./logo/google-pay.png";
import CardSlider from './Cardslider';


//<a target="_blank" href="https://icons8.com/icon/yafHnJOnSrLu/ethereum">Ethereum</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

const FourthSection = () => {
    return ( 
        <div className="s4">
            <div className="headies">

                <CardSlider />
                
                <div className='try3'>
                    <h1>Cash, Credit or Crypto?</h1>
                    <h3>
                    Buy crypto instantly using Visa or Mastercard. Get cash in your account fast with PayID or Osko. Convert crypto-to-crypto with a single click.
                    </h3>
                    <button>
                        See all crypto prices
                    </button>
                    <div style={{display: "flex" , flexDirection: "row", margin: "3rem 15rem", justifyContent: "space-evenly"}}>
                    <img src={apple} alt="" />
                    <img src={amazon} alt="" />
                    <img src={mastercard} alt="" />
                    <img src={visa} alt="" />
                    <img src={google} alt="" />
                    <img src={paypal} alt="" />
                    </div>
                </div>
            </div>   

            <div className='bodyes'>
                <h1>Crypto Trading Designed for Everyone</h1>
                <p><i>bossIAN was built to simplify cryptocurrency trading. Beginners can quickly buy and sell 30+ digital assets on our intuitive platform, while experienced or professional traders can take advantage of our advanced features and trading tools.</i></p>
                <div className="pass">
                    <div className="glow" data-aos="flip-down" data-aos-duration="2000">
                        <img src={signup} alt="sign-up" />
                        <div>
                        <h1>1</h1>
                        <h2>SIGN UP</h2>
                        <p>
                        Create an account in minutes and quickly transfer funds with free deposits
                        </p>
                        </div>
                    </div>
                    <div className="glow" data-aos="flip-down" data-aos-duration="2000">
                        <img src={invest} alt="invest" />
                        <div>
                        <h1 style={{margin: "1px 60px"}}>2</h1>
                        <h2>INVEST</h2>
                        <p>
                        Instantly buy a number of crypto assets with low 0.2% trading fees
                        </p>
                        </div>
                    </div>
                    <div className="glow" data-aos="flip-down" data-aos-duration="2000">
                        <img src={trade} alt="trade" />
                        <div>
                        <h1 style={{margin: "1px 60px"}}>3</h1>
                        <h2>TRADE</h2>
                        <p>
                        Buy, sell and trade on our secure exchange and track your portfolio’s growth
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FourthSection;