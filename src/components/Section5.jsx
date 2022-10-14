import React from 'react';
import "./Section5.css";
import coins from "./imagey/coinsz.png";
import trade from "./imagey/trading.jpg";
import secure from "./imagey/bitSECURITY.jpg";

const FifthSection = () => {
    return ( 
        <div className="details">
            <div className="entails" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                <div className="bug intel">
                    <h1>
                        Niklaus Sets the Standard for Nigerian Cryptocurrency Trading
                    </h1>
                    <p>
                        <i>
                            Our platform features secure digital asset storage, multiple funding methods, and same-day deposit and withdrawal settlements, leaving you free to focus on trading, tracking, and managing your crypto portfolio.
                        </i>
                    </p>
                    <ul>
                        <li>Instant id verification</li>
                        <li>Lowest fees in Naija</li>
                        <li>24/7 live customer support</li>
                        <li>Largest portfolio of coins in Naija</li>
                    </ul>
                    <button>
                        Learn More
                    </button>
                </div>
                <div className="bug pictures">
                    <img src={coins} alt="coins" />
                </div>
            </div>

            <div className="entails" data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
                <div className="bug pictures">
                    <img style={{margin: "0rem", height: "38rem", width: "100%"}} src={trade} alt="trade" />
                </div>
                <div className="bug intel" style={{padding: "2rem 0rem 2rem 5rem"}}>
                    <h1>
                        Powerful Crypto Trading Tools
                    </h1>
                    <p>
                        <i>
                        Start building your crypto portfolio on Nigeria’s most secure trading platform. Niklaus gives you easy access to your digital assets, plus reports that show your trading activity and portfolio growth on a daily, monthly, or yearly basis.
                        </i>
                    </p>
                    <p>
                        <i>
                        You can even set up recurring buys on assets like Bitcoin, Ethereum, and dozens of other coins so you can invest in cryptocurrency on your own schedule.
                        </i>
                    </p>
                    <button style={{width: "11rem"}}>
                        Start Investigating   
                    </button>
                </div>
            </div>

            <div className="entails" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                <div className="bug intel">
                    <h1>
                    Your Safety is Our Priority
                    </h1>
                        <p>
                            <i>
                            Niklaus holds a majority of user funds in an offline, multi-signature wallet. That’s a fancy way of saying that your digital assets are locked up tight and will be there when you want them.
                            </i>
                        </p>
                    <ul>
                        <li>Nigerian-based segregated accounts</li>
                        <li>Adherence to Nigeria’s highest security standards</li>
                        <li>Compliance with Nigerian banking regulations</li>
                        <li>Insurance protection for assets in hot and cold storage</li>
                    </ul>
                    <button>
                        Learn More
                    </button>
                </div>
                <div className="bug pictures">
                    <img src={secure} alt="secure" />
                </div>
            </div>
        </div>
     );
}
 
export default FifthSection;