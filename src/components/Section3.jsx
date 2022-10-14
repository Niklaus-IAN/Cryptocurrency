import React, { Component } from 'react';
import btcgold from "./images/btc-gold.jpg";
import ethgold from "./images/ethereum.png";
import dogegold from "./images/DOGE.png";
import ripple from "./images/ripple_logo.png"
import tether from "./images/Tetherh.png";
import "./Section3.css";


class ThirdSection extends Component {

    // state = {   } 

    render() { 
        return (
            <React.Fragment>
            <div className="builder">
                <div className='ling'>
                <h1>BITCOIN</h1>
                <img src={btcgold} alt="btcgold" />
                <p>
                Bitcoin is a <span>cryptocurrency</span>, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, 
                and thus removing the need for third-party involvement in financial transactions. 
                </p>
                <p>
                It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges.
                </p>
                <p>
                Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.
                </p>
                </div>

                <div className='lint'>
                <h1 style={{color: "green"}}>ETHEREUM</h1>
                <img 
                style={{
                width: "27rem", 
                float: "left"
                }} 
                src={ethgold} alt="ethgold" />
                <p>
                Ethereum is a technology that's home to digital money, global payments, and applications.
                It's open to everyone, wherever you are in the world : all you need is the internet. 
                </p>
                <p>
                Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
                </p>
                <p>
                The community has built a booming digital economy, bold new ways for creators to earn online, and so much more.
                </p>
                </div>

                <div className='lino'>
                <h1>DOGECOIN</h1>
                <img src={dogegold} alt="dogegold" />
                <p>
                Dogecoin (DOGE) is a peer-to-peer, open-source cryptocurrency.
                It is considered an altcoin and was launched in December 2013 with the image of a Shiba Inu dog as its logo. 
                </p>
                <p>
                Dogecoin's blockchain has merit with its underlying technology derived from Litecoin.
                Notable features of Dogecoin, which uses a scrypt algorithm, are its low price and unlimited supply.
                </p>
                <p>
                Dogecoin has a loyal community of supporters who trade it and use it as a tipping currency for social media content.
                </p>
                </div>

                <div className='liny'>
                <h1 style={{color: "lightslategrey"}}>RIPPLE</h1>
                <img 
                style={{
                width: "27rem", 
                float: "left"
                }} 
                src={ripple} alt="ripgold" />
                <p>
                Ripple is a technology that acts as both a <span>cryptocurrency</span> and a digital payment network for financial transactions.
                It was first released in 2012 and was co-founded by Chris Larsen and Jed McCaleb. 
                </p>
                <p>
                Ripple's main process is a payment settlement asset exchange and remittance system, similar to the <a href='https://www.investopedia.com/terms/r/ripple-cryptocurrency.asp'><em>SWIFT</em></a> system for international money and security transfers,
                which is used by banks and financial middlemen dealing across currencies.
                </p>
                <p>
                The token used for the cryptocurrency is premined and utilizes the ticker symbol <b>XRP</b>.
                </p>
                </div>

                <div className='linu'>
                <h1 style={{color: "rgb(53, 53, 53)"}}>TETHER</h1>
                <img src={tether} alt="tether" />
                <p>
                Tether <a href='https://www.investopedia.com/terms/t/tether-usdt.asp' style={{color: 'green'}}>(USDT)</a> is a cryptocurrency <strong>stablecoin</strong> pegged to the U.S. dollar and backed "100% by Tether's reserves," according its website.
                Tether is owned by iFinex, the Hong Kong-registered company that also owns the crypto exchange BitFinex.
                </p>
                <p>
                Originally based on the Bitcoin blockchain, Tether now supports Bitcoin's Omni and Liquid protocols as well as the 
                Ethereum, TRON, EOS, Algorand, Solana, OMG Network, and Bitcoin Cash (SLP) blockchains.
                </p>
                <p>
                Tether was launched as RealCoin in July 2014 and was rebranded as Tether in November 2014.
                </p>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default ThirdSection;