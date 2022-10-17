import React, { useEffect, useState } from 'react';
import "./CS.css";

import eth from "./logo/icons8-ethereum-96.png";
import btc from "./logo/icons8-bitcoin-96.png";
import xrp from "./logo/icons8-xrp-85.png";
import dgc from "./logo/icons8-dogecoin-85.png";
import teh from "./logo/icons8-tether-85.png";
import usdc from "./logo/USD-coin.png";
import shiba from "./logo/shiba-inu.png";
import dai from "./logo/DAI.png";
import avac from "./logo/avalanche.png";
import tron from "./logo/currency.png";
import polk from "./logo/polkadot.png";
import sol from "./logo/solana.png";
import usd from "./logo/usd.png";
import cardano from "./logo/cardano.png";

const CardSlider = () => {


    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0.58)
    const delay = 1000

    useEffect(() => {
        setTimeout(
          () =>
            setIndex1((prevIndex1) =>
              prevIndex1 >= 0.58 ? 0 : prevIndex1 + 0.029
            ),
          delay
        );
        // console.log(index1);
        return () => {};
    }, [index1]);

    useEffect(() => {
        setTimeout(
          () =>
            setIndex2((prevIndex2) =>
              prevIndex2 <= 0 ? 0.58 : prevIndex2 - 0.029
            ),
          delay
        );
        // console.log(index2);
        return () => {};
    }, [index2]);
    
    return ( 
        <div className='card'>
            <div className="tie1" style={{ transform: `translate3d(${-index1 * 100}%, 0, 0)` }}>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={eth} alt="eth" />
                    <h2>ETHEREUM</h2>
                    <h3>18,593.50 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={btc} alt="btc" />
                    <h2>BITCOIN</h2>
                    <h3>1,272.01 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={xrp} alt="xrp" />
                    <h2>XRP</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={tron} alt="xrp" />
                    <h2>TRON</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={sol} alt="xrp" />
                    <h2>SOLANA</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={cardano} alt="xrp" />
                    <h2>CARDANO</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={usd} alt="xrp" />
                    <h2>USDT</h2>
                    <h3>1.00 USD</h3>
                </div>
            </div>    

            <div className="tie2" style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={dgc} alt="dgc" />
                    <h2>DOGECOIN</h2>
                    <h3>0.5244 USD</h3>           
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={teh} alt="teh" />
                    <h2>TETHER</h2>
                    <h3>0.059 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={avac} alt="xrp" />
                    <h2>AVALANCHE</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={shiba} alt="xrp" />
                    <h2>SHIBA-INU</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={polk} alt="xrp" />
                    <h2>POLKADOT</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={dai} alt="xrp" />
                    <h2>DAI</h2>
                    <h3>1.00 USD</h3>
                </div>
                <div className="nag" data-aos="flip-left" data-aos-duration="1500">
                    <img src={usdc} alt="xrp" />
                    <h2>USDC</h2>
                    <h3>1.00 USD</h3>
                </div>
            </div>
        </div>
     );
}
 
export default CardSlider;
