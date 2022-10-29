import React, { useState, useEffect } from 'react';
import "./Section8.css";

const EigthSection = () => {

    const [Day, changeDay] = useState();
    const [Hour, changeHour] = useState();
    const [Minute, changeMinute] = useState();
    const [Second, changeSecond] = useState();

    const pdate = new Date();
    const adate = new Date(2022, 9, 31, 12);
    const calcdate = (adate.getTime() - pdate.getTime());
    
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const calcdays = calcdate/day;
    const days = Math.floor(calcdays);
    // console.log(days);

    useEffect(() => {
        const dating = setInterval(() => {
        changeDay(days);
        }, 1000);
        if (days <= 0) {
            changeDay(0);
            clearInterval(dating);
        };
        return () => {
            clearInterval(dating);
        };
    }, [days]);

    const calchours = (calcdays - days) * 24;
    const hours = Math.floor(calchours);
    // console.log(hours);

    useEffect(() => {
        const houring = setInterval(() => {
        changeHour(hours);
        }, 1000);
        if (hours <= 0) {
            changeHour(0);
            clearInterval(houring);
        };
        return () => {
            clearInterval(houring);
        };
    }, [hours]);

    const calcmins = (calchours - hours) * 60;
    const mins = Math.floor(calcmins);
    // console.log(mins);

    useEffect(() => {
        const mining = setInterval(() => {  
        changeMinute(mins);
        }, 1000);
        if (calcdate <= 3600000) {
            changeMinute(0);
            clearInterval(mining);
        };
        return () => {
            clearInterval(mining);
        };
    }, [mins, calcdate]);

    const calcsecs = (calcmins - mins) * 60;
    const secs = Math.floor(calcsecs);
    // console.log(secs);

    useEffect(() => {
        const secing = setInterval(() => {
        changeSecond(secs);
        }, 1000);
        if (calcdate <= 60000) {
            changeSecond(0);
            clearInterval(secing);
        };
        return () => {
            clearInterval(secing);
        };
    }, [secs, calcdate]);

    return ( 
        <div className="s8">
            <div className="factz">
                <h1>
                    COMING SOON...
                </h1>
                <div>
                    <h2>
                        DAYS
                    </h2>
                    <p>
                        {Day <= 9 ? `0${Day}`: Day}
                    </p>
                </div>
                <span>
                    :
                </span>
                <div>
                    <h2>
                        HOURS
                    </h2>
                    <p>
                        {Hour <= 9 ? `0${Hour}`: Hour}
                    </p>
                </div>
                <span>
                    :
                </span>
                <div>
                    <h2>
                        MINUTES
                    </h2>
                    <p>
                        {Minute <= 9 ? `0${Minute}`: Minute}
                    </p>
                </div>
                <span>
                    :
                </span>
                <div>
                    <h2>
                        SECONDS
                    </h2>
                    <p>
                        {Second <= 9 ? `0${Second}`: Second}
                    </p>
                </div>
            </div>
        </div>    
     );
}
 
export default EigthSection;