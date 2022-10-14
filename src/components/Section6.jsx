import React, { useState } from 'react'
import "./Section6.css"
import NFT from "./imagey/NFT.jpg";
import BCHAIN from "./imagey/newWORLD.jpg";
import DAO from "./imagez/crypto-unsplash.jpg";
import LEARN from "./phones/brian.jpg";



const SixthSection = () => {

    const [position, postChange] = useState("-2px");

    // const [show01, postShow01] = useState("none");
    // const [show02, postShow02] = useState("none");
    // const [show03, postShow03] = useState("none");
    // const [show04, postShow04] = useState("none");

    // // // const [colour, colourChange] = useState("black");

    // function show1() {
    //     if (position === "-2px") {
    //         postShow01("block");
    //     } else {
    //         postShow01("none");
    //     }
    // }

    // function show2() {
    //     if (position === "165px") {
    //         postShow02("block");
    //     } else {
    //         postShow02("none");
    //     }   
    // }

    // function show3() {
    //     if (position === "312px") {
    //         postShow03("block");
    //     } else {
    //         postShow03("none");
    //     }
    // }

    // function show4() {
    //     if (position === "460px") {
    //         postShow04("block");
    //     } else {
    //         postShow04("none");
    //     }   
    // }


    return ( 
        <div className="sixsection">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-center" className='wobble'>klaus Ecosystem</h1>
            <div className='slime'>
                <h2 onClick={() => {postChange("-2px")}}>MULTICHAIN</h2>
                <h2 onClick={() => postChange("165px")}>DAO</h2>
                <h2 onClick={() => postChange("312px")}>LEARN</h2>
                <h2 onClick={() => postChange("460px")}>NFT</h2>
                <div style={{left: `${position}`}}></div>
            </div>
            </div>

            <div className='space'>
                <div className="activity">
                    <div className="infos" style={position === "-2px" ? {display: "block"} : {display: "none"} }>
                        <h1>
                        What Is a Blockchain?
                        </h1>
                        <p>
                        A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. 
                        </p>
                        <h2>
                        How Does a Blockchain Work?
                        </h2>
                        <p>
                        The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed.
                        </p>
                        <button>
                            GET STARTED
                        </button>
                    </div>
                    <div className="infosmage" style={position === "-2px" ? {display: "block"} : {display: "none"} }>
                        <img src={BCHAIN} alt="" />
                    </div>
                </div>

                <div className="activity">
                    <div className="infos" style={position === "165px" ? {display: "block"} : {display: "none"} }>
                        <h1>
                        Decentralized Autonomous Organization (DAO)
                        </h1>
                        <p>
                        A decentralized autonomous organization (DAO) is an emerging form of legal structure that has no central governing body and whose members share a common goal to act in the best interest of the entity. 
                        </p>
                        {/* <h2>
                        How DAOs Work?
                        </h2>
                        <p>
                        DAOs rely heavily on smart contracts. These logically coded agreements dictate decision-making based on underlying activity on a blockchain. 
                        </p> */}
                        <button>
                        Join / start a DAO
                        </button>
                    </div>
                    <div className="infosmage" style={position === "165px" ? {display: "block"} : {display: "none"} }>
                        <img src={DAO} alt="" />
                    </div>
                </div>

                <div className="activity">
                    <div className="infos" style={position === "312px" ? {display: "block"} : {display: "none"} }>
                        <h1>
                        About Learn Crypto
                        </h1>
                        <p>
                        Learn Crypto is a free education platform designed to help users easily learn about cryptocurrency, with simple, relevant and engaging content.
                        </p>
                        <p>
                        Start with cryptocurrency basics or choose from our common themes.
                        </p>
                        <button>
                            START LEARNING
                        </button>
                    </div>
                    <div className="infosmage" style={position === "312px" ? {display: "block"} : {display: "none"} }>
                        <img src={LEARN} alt="" />
                    </div>
                </div>

                <div className="activity">
                    <div className="infos" style={position === "460px" ? {display: "block"} : {display: "none"} }>
                        <h1>
                            NFT
                        </h1>
                        <p>
                        NFTs (or “non-fungible tokens”) are a special kind of cryptoasset in which each token is unique — as opposed to “fungible” assets like Bitcoin and dollar bills, which are all worth exactly the same amount. Because every NFT is unique, they can be used to authenticate ownership of digital assets like artworks, recordings, and virtual real estate or pets.
                        </p>
                        <p>
                        Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency.
                        </p>
                        <button>
                            BUY NFT
                        </button>
                    </div>
                    <div className="infosmage" style={position === "460px" ? {display: "block"} : {display: "none"} }>
                        <img src={NFT} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SixthSection;