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
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="bout2">
                        <img src={pad} alt="" />
                    </div>
                </div>
            </div>
            <div className="vid">
                <video loop autoPlay src={tradevid} />
            </div>
            <div className="chat">
                <div className="chats">
                    <img src={contact} alt="" />
                </div>
                <div className="chats">
                    <h1>
                        Contact Us
                    </h1>
                    <p>
                    Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
                    </p>
                    <p>
                    Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit. Vivamus sagittis ornare fuck. Nullam lacinia jizzmopper vel diam tempor et consequat ligula porttitor.
                    </p>
                </div>
            </div>
            <div className="chat">
                <div className="chats ting">
                    <h1>
                        Learn To Trade
                    </h1>
                    <p>
                    Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster hipmunk prezi chartly bitly spock. Loopt twones meebo hipmunk, fleck xobni. Convore bebo rovio vimeo zanga handango blekko koofers, loopt twitter imvu flickr kaboodle chegg. Zillow lala mzinga, sifteo. Voki heekya sococo geni oovoo disqus, empressr doostang lijit.
                    </p>
                    <p>
                    A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse and Mrs Falani were up to no good with a bunch of crook pikelets. Meanwhile, at the black singlet woolshed party, not even au, sort your drinking out.
                    </p>
                    <p>
                    Hardware nosebone Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in airwalk fast plant fastplant pivot.
                    </p>
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
                    <textarea type="text" name="" id="t-area" style={{maxHeight: "9rem", height: "144px"}} />
                    <h2>
                        Overall Report
                    </h2>
                    <textarea type="text" name="" id="t-area" style={{maxHeight: "8rem", height: "128px"}}/>
                    <button id='goat'>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Community;