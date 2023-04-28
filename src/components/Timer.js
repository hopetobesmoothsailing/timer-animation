import React, {memo, useEffect, useState} from "react";
import '../App.css'
import {AnimateOnChange} from 'react-animation'

const Timer = memo(props => {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (sec < 59) {
                setSec(sec + 1);
            } else {
                setSec(0);
                if (min < 59) setMin(min + 1);
                else {
                    setMin(0);
                    if (hour < 23) setHour(hour + 1);
                    else setHour(0);
                }
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })

    return (
        <div className={'timerPanel'}>
            <Sector value={hour} />
            <span className={'colon'}> : </span>
            <Sector value={min} />
            <span className={'colon'}> : </span>
            <Sector value={sec} />
        </div>
    )
})

export default Timer

const Sector = memo(props => {
    return (
        <AnimateOnChange
            animationIn={'bounceIn'}
            animationOut={'bounceOut'}
        >
            {setPadding(props.value)}
        </AnimateOnChange>
    )
})

const setPadding = (value) => {
    if (value.toString().length === 1) return '0' + value;
    else return value
}