import React, { useState, useEffect } from 'react'
import About from './Info';
import "./Slider.css"

import btcgold from "./images/btc-gold.jpg";
import ethgold from "./images/ethereum.png";
import dogegold from "./images/DOGE.png";
import ripple from "./images/ripple_logo.png"
import tether from "./images/Tetherh.png";

const image = [btcgold, ethgold, dogegold, ripple, tether]
const delay = 30000;

const Slideshow = () => {

    const [index, setIndex] = useState(0);

    const [idx, setIdx] = useState(0);

    useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === image.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {};
    }, [index]);

    useEffect(() => {
        setTimeout(
          () =>
            setIdx((prevIdx) =>
              prevIdx === About.length - 1 ? 0 : prevIdx + 1
            ),
          delay
        );
        return () => {};
    }, [idx]);

    return ( 
        <div className='sliderz'>
        <div className="slideshow vik">
            <div className="slideshowSlider"
            style={{ transform: `translate3d( 0,${-index * 100}%, 0)` }}
            >
                <div className="slide">
                {image.map((bgdimg, index) => (
                <img className="slide" key={index} src={bgdimg} alt={`${bgdimg}`}  />
                ))}
                </div>
            </div>
        </div> 

        <div className="slideshow vic">
            <div className="slideshowSliderz"
            style={{ transform: `translate3d( 0,${-idx * 20.5}%, 0)` }}
            >
                <div className="slide">                
                    {About.map((stuff, idx) => (
                        <div className="tycoon" key={idx}>
                            <h1 style={stuff.divstyle.h1}>{stuff.coin}</h1>
                            <p>{stuff.description1}</p>
                            <p>{stuff.description2}</p>
                            <p>{stuff.conclusion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div> )
}
 
export default Slideshow;


