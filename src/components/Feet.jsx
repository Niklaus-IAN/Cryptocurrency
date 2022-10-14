import React, { Component } from 'react';
import "./Feet.css";
import whatsapp from "./logo/whatsapp.png";
import twitter from "./logo/twitter.png";
import facebook from "./logo/facebook.png";
import discord from "./logo/discord.png";
import youtube from "./logo/youtube.png";
import instagram from "./logo/instagram.png";
import copyright from "./logo/copyright.png";

class Feet extends Component {
    render() { 
        return (
            <React.Fragment>
            <div className="footerhouse">
                <div className="fhouse01">
                    <h3>SOCIALS</h3>
                    <img src={whatsapp} style={{marginLeft: "0rem"}} alt="whatsapp" />
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} style={{height: "4rem" ,width: "4.5rem", paddingTop: "2px"}} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                    <img src={discord} alt="discord" />
                    <h3>COMPANY/ADDRESS</h3>
                    <div className="ian klaus" style={{padding: "0px", cursor: "pointer", width: "200px"}}>
                        <h1>boss IAN</h1>
                    </div>
                    <h4>
                    No 3, Methodist str, Balogun-Erunwen, Itamaga-Elepe Road, Ikorodu, Lagos Nigeria.
                    </h4>
                </div>
                <div className="fhouse02">
                    <div className="fh02c01">
                        <div className="c01 d01">
                        <h3>ABOUT</h3>
                        <h4>NFT</h4>
                        <h4>MULTIVERSE</h4>
                        <h4>APP</h4>
                        <h4>BRAND</h4>
                        </div>
                        <div className="c01 d02">
                        <h3>LEGAL</h3>
                        <h4>TERMS OF SERVICE</h4>
                        <h4>PRIVACY POLICY</h4>
                        <h4>SHIPPING POLICY</h4>
                        <h4>RETURN POLICY</h4>
                        </div>
                    </div>
                    <div className="fh02c02">
                        <h3>PRODUCT</h3>
                        <ul>
                            <li><h4>TRADES</h4></li>
                            <li><h4>PRICING</h4></li>
                            <li><h4>OUR FEES</h4></li>
                            <li><h4>STAKING</h4></li>
                            <li><h4>SECURITY</h4></li>
                            <li><h4>WALLET</h4></li>
                            <li><h4>KLAUS</h4></li>
                            <li><h4>WEALTH</h4></li>
                        </ul>
                    </div>
                    <div className="fh02c03">
                        <div className="c03 d01">
                        <h3>HELP</h3>
                        <h4>PROGRAM</h4>
                        <h4>SECURITY</h4>
                        <h4>CONTACT</h4>
                        <h4>PRESS</h4>
                        </div>
                        <div className="c03 d02">
                        <h3>SUPPORT</h3>
                        <h4>TRADE</h4>
                        <h4>REFERRAL</h4>
                        <h4>DONATION</h4>
                        <h4>PATNERS</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h2>
                    Copyright <span className='sapa'><img src={copyright} alt="copyright" /></span> 2022 NIKLAUS || BUILT BY OLAYINKA IYIOLUWA
                </h2>
            </div>
            </React.Fragment>
        );
    }
}
 
export default Feet;