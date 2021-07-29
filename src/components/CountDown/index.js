import React, { useState, useEffect } from 'react'
import TimeItem from '../TimeItem'
import './global.css'

const CountDown = ({
    Title,
    Subtitle,
    TimeData
}) => {
    
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [sec, setSec] = useState('');

    useEffect( () => {
        CountDownBlackFriday();
    });

    const CountDownBlackFriday = () => {
        let now = new Date()
        let eventDate = new Date("02 August 2021 08:00:00 GMT-0300");

        console.log("EVENTDATE: ", eventDate);

        let currentTime = now.getTime()
        let eventTime = eventDate.getTime()

        let remTime = eventTime - currentTime;

        let s = Math.floor(remTime / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);

        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? '0' + h : h
        m = (m < 10) ? '0' + m : m
        s = (s < 10) ? '0' + s : s

        setDay(d);
        setHour(h);
        setMin(m);
        setSec(s);

        setTimeout(CountDownBlackFriday, 1000);
    }

    return(
        <div>
            <img src="/fugura11.jpeg"></img>
        <div className="countdown-container">
             
            <h1 className="title">
                {Title}
            </h1>
            <h2 className="subtitle">
                {Subtitle}
            </h2>

            <div className="time-container">
           
               { TimeData.map( (item, index) =>  
                    <TimeItem 
                        ItemKey = {index}
                        className = {item.className}
                        timeType = {item.timeType}
                        Days = { day }
                        Hours = { hour }
                        Min = { min }
                        Sec = { sec }
                    />
               )}
               
            </div>
            <img src="/fugura12.jpeg"></img>
        </div>    
        </div>
    )

}

export default CountDown