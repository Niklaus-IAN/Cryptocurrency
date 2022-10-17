import React, { useEffect, useState } from 'react';
import "./Testimony.css";
import dan from "./logo/image-daniel.jpg";
import dem from "./logo/image-denim.png";
import jane from "./logo/image-jeanette.jpg";
import john from "./logo/image-jonathan.jpg";
import kira from "./logo/image-kira.jpg";
import pat from "./logo/image-patrick.jpg";
import istar from "./logo/incomplete-star.png";
import cstar from "./logo/complete-star.png";

const Testimonies = () => {
    const [testimony, UpdateTestimony] = useState(null)

    const [idx, setIdx] = useState(0);

    const delay = 1000

    // console.log (testimonies.length())

    useEffect(() => {
        fetch('http://localhost:8000/testimonies')
        .then(res => {
            return res.json();
        })
        .then(data => {
            UpdateTestimony(data); 
        })
    }, [])

    // let berlin = testimony.length*0.5
    // console.log(berlin);
    useEffect(() => {
        setTimeout(
          () =>
            setIdx((prevIdx) =>
                prevIdx >= 1 ? prevIdx = 0 : prevIdx + 0.03
                // prevIdx =+ 0.029;
                // if (prevIdx >= 0.58 ) {
                //   prevIdx =- 0.029
                // } 
                // else if (prevIdx <= 0) {
                //     prevIdx =+ 0.029
                // } 
                // else {
                //     prevIdx =+ 0.029
                // } 
            ),
          delay
        );
        // console.log(index1);
        return () => {
            // console.log(idx)
        };
    }, [idx]);
    
    return ( 
        <div className='testimonyCard'>
            <div className='taiwan' style={{ transform: `translate3d(${-idx * 100}%, 0, 0)` }}>
                { testimony &&
                    testimony.map((value, id) => 
                        <div className={`tokyo lag${id}`}>
                            <h2>Testimony</h2>
                            <p>"{value.Message}"</p>
                            <h2>Overall Review</h2>
                            <p>"{value.O_Report}"</p>
                            <img 
                            src={value.Avatar === "john" ? john : value.Avatar === "jane" ? jane : value.Avatar === "dan" ? dan : value.Avatar === "dem" ? dem : value.Avatar === "kira" ? kira : value.Avatar === "pat" ? pat : null}
                             alt={value.Avatar} />
                            <p className='remi' style={{textTransform: "uppercase", margin: "0rem 0.5rem", display: "inline-block"}}>{value.Avatar}</p>
                        </div>
                    )   
                }
            </div>    
        </div>
     );
} 
 
export default Testimonies;