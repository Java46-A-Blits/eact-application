import React, { useEffect } from "react";
type Props = {
    interval?: number; //?-> optional  - if parent doesn't set the interval then it will be 1000ms (line 12)
    timeZone: string;
}
const Timer: React.FC<Props> = ({interval, timeZone})=> {   // FC functional  component
    const [time, setTime] = React.useState(new Date());
    function tic(): void {
        console.log('kuku');
        setTime(new Date());
    }
    useEffect(()=> {
            console.log('timer has been mounted');
            const intervalId  = setInterval(tic, interval || 1000);
            return ()=> {
                clearInterval(intervalId);
                console.log("timer unmounted");
            }
        }, [interval]);   // [] -> don't call 'setInterval' when  'time' changes
    
    return <div style={{marginLeft: "10vw"}}>
        <h3>Current Time in {timeZone}</h3>
        <label>{time.toLocaleTimeString([],{timeZone})}</label>
    </div> 
}
export default Timer;