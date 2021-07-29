import React from 'react'
import './global.css'

const TimeItem = ({
    ItemKey,
    className,
    Days,
    Hours,
    Min,
    Sec,
    timeType
}) => {
    
    return(
        <div key={ItemKey} className={`time-item ${className}`}>
           <p className="time">
                { className === "day" && Days }
                { className === "hour" && Hours }
                { className === "minute" && Min }
                { className === "second" && Sec }
           </p>
           <p className="time-type">
                {timeType}
           </p>
        </div>    
    )

}

export default TimeItem