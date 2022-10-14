import React, { useState } from 'react';
import "./Community.css";
import pad from "./imagez/pad-image.svg";
import tradevid from "./imagez/tradevideo.mp4";
import contact from "./imagez/features-image.svg";
import learn from "./imagez/iphone-used.jpg";
import dan from "./logo/image-daniel.jpg";
import dem from "./logo/image-denim.png";
import jane from "./logo/image-jeanette.jpg";
import john from "./logo/image-jonathan.jpg";
import kira from "./logo/image-kira.jpg";
import pat from "./logo/image-patrick.jpg";
import istar from "./logo/incomplete-star.png";
import cstar from "./logo/complete-star.png";

const Community = (props) => {
    console.log (props)

    const [star01, starToggler01] = useState(false);
    const starCheck01 = () => {
        starToggler01(prevCheck => 
            {
                return !prevCheck
            }
        )
    };

    const [star02, starToggler02] = useState(false);
    const starCheck02 = () => {
        starToggler02(prevCheck => 
            {
                return !prevCheck
            }
        )
    };

    const [star03, starToggler03] = useState(false);
    const starCheck03 = () => {
        starToggler03(prevCheck => 
            {
                return !prevCheck
            }
        )
    };

    const [star04, starToggler04] = useState(false);
    const starCheck04 = () => {
        starToggler04(prevCheck => 
            {
                return !prevCheck
            }
        )
    };

    const [star05, starToggler05] = useState(false);
    const starCheck05 = () => {
        starToggler05(prevCheck => 
            {
                return !prevCheck
            }
        )
    };

    return ( 
        <div className="repo">
            <div className='commute'>
                <div className="response">
                    <div className="bout1">
                        <h1>
                            Our Community
                        </h1>
                    </div>
                    <div className="bout2">
                        <img src={pad} alt="" />
                    </div>
                </div>
            </div>
            <div className="vid">
                <video loop src={tradevid} />
            </div>
            <div className="chat">
                <div className="chats">
                    <img src={contact} alt="" />
                </div>
                <div className="chats">
                    <h1>
                        Contact Us
                    </h1>
                </div>
            </div>
            <div className="chat">
                <div className="chats ting">
                    <h1>
                        Learn To Trade
                    </h1>
                </div>
                <div className="chats">
                    <img src={learn} alt="" />
                </div>
            </div>

            <div className="chat zhat">
                <div className="rate">
                    <h1 className='greet'>
                        Welcome!
                    </h1>    
                    <p className='naming p01'>
                        {props.firstName}
                    </p>
                    <p className='naming p02'>
                        {props.lastName}
                    </p>
                    <h2>
                        Avatar
                    </h2>
                    <div>
                        <img src={dan} alt="" style={{borderRadius: "50%", marginLeft: "0rem"}}/>
                        <img src={dem} alt="" />
                        <img src={john} alt="" style={{borderRadius: "50%"}}/>
                        <img src={kira} alt="" style={{borderRadius: "50%"}}/>
                        <img src={pat} alt="" style={{borderRadius: "50%"}}/>
                        <img src={jane} alt="" style={{borderRadius: "50%"}}/>
                    </div>
                    <h2>
                        Rating
                    </h2>
                    <div className='berlin'>
                        <img className='star' src={star01 === true? cstar: istar} onClick={starCheck01} style={{marginLeft: "0rem"}} alt="" />
                        <img className='star' src={star02 === true && star01 === true? cstar: istar} onClick={starCheck02} alt="" />
                        <img className='star' src={star03 === true && star02 === true && star01 === true? cstar: istar} onClick={starCheck03} alt="" />
                        <img className='star' src={star04 === true && star03 === true && star02 === true && star01 === true? cstar: istar} onClick={starCheck04} alt="" />
                        <img className='star' src={star05 === true && star04 === true && star03 === true && star02 === true && star01 === true? cstar: istar} onClick={starCheck05} alt="" />
                    </div>
                </div>
                <div className="messages">
                    <h1>
                        LEAVE A MESSAGE
                    </h1>
                    <textarea type="text" name="" id="t-area" style={{maxHeight: "9rem"}} />
                    <h2>
                        Overall Report
                    </h2>
                    <textarea type="text" name="" id="t-area" style={{maxHeight: "8rem"}}/>
                    <button id='goat'>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Community;