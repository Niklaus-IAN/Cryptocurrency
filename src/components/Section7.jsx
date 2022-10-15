import React, { useEffect, useState } from 'react';
import "./Section7.css";
import arrow from "./imagez/arrow.png";
import distribution from "./imagez/distribution.png";
import decentralization from "./imagez/decentralization.png";
import encryption from "./imagez/encryption.png";
import transaction from "./imagez/transactions.png";
import logo from "./imagez/logos-set.jpg";
import jackpot from "./imagez/jackpot.jpg";


const SeventhSection = () => {
    
    const [xusers, xusersUpdate] = useState(0);

    const [yusers, yusersUpdate] = useState(0);

    const [rotate, rotateUpdate] = useState(0);

    useEffect(() => {
        const xtiming = setInterval(() => {
          xusersUpdate(prevCount => prevCount + 1); // <-- Change this line!
        }, 580);
        if (xusers === 20) {
            clearInterval(xtiming);
        }
        return () => clearInterval(xtiming);
    }, [xusers]); // Pass in empty array to run effect only once!

    useEffect(() => {
        const ytiming = setInterval(() => {
          yusersUpdate(prevCount => prevCount + 1); // <-- Change this line!
        }, 50);
        if (yusers === 200) {
            clearInterval(ytiming);
        }
        return () => clearInterval(ytiming);
    }, [yusers]); // Pass in empty array to run effect only once!

    useEffect(() => {
        const rotation = setInterval(() => {
          rotateUpdate(prevCount => prevCount + 1); // <-- Change this line!
        }, 50);
        // if (rotate === 200) {
        //     clearInterval(rotation);
        // }
        return () => {
            clearInterval(rotation);
        }
    }, []); // Pass in empty array to run effect only once!

    // console.log(rotate);

    // window.addEventListener('scroll', () => {
    //     console.log('????');
    // });

    // const handleScroll = event => {
    //     console.log('scrollTop: ', event.currentTarget.scrollTop);
    //     console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    // };

    return ( 
        <div className="s7" /*onScroll={handleScroll}*/>
            <div className='cycle' style={{rotate: `-${rotate}deg`}} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img className='barnz a1' src={arrow} alt="" />
                <img className='barnz a2' src={arrow} alt="" />
                <img className='barnz a3' src={arrow} alt="" />
                <img className='barnz a4' src={arrow} alt="" />
                <img className='barnz a5' src={arrow} alt="" />
                <img className='barnz a6' src={arrow} alt="" />
                <img className='barz b1' src={distribution} alt="" />
                <img className='barz b2' src={decentralization} alt="" />
                <img className='barz b3' src={encryption} alt="" />
                <img className='barz b4' src={transaction} alt="" />
                <img className='barz b5' src={logo} alt="" />
                <img className='barz b6' src={jackpot} alt="" />
            </div>
            <div className='facts' data-aos="fade-up" data-aos-anchor-placement="center-center">
                <h2>
                Uphold is a global multi-asset digital trading platform
                </h2>
                <p>
                Easy and Secure a place to trade and manage your digital assets
                </p>
                <div>
                    <h1>
                        {xusers+ "+"}
                    </h1>
                    <p style={{fontSize: "1.5rem", fontWeight: "500"}}>
                        Million Users
                    </p>
                </div>
                <div>
                    <h1>
                        {yusers+ "+"}
                    </h1>
                    <p style={{fontSize: "1.5rem", fontWeight: "500"}}>
                        Cryptocurrencies
                    </p>
                </div>
                <div>
                    <h1>
                        50
                    </h1>
                    <p style={{fontSize: "1.5rem", fontWeight: "500"}}>
                        Naija Stocks*
                    </p>
                </div>
                <div>
                    <h1>
                        150
                    </h1>
                    <p style={{fontSize: "1.5rem", fontWeight: "500"}}>
                        Countries
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default SeventhSection;