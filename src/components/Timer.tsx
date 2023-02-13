import React, { useEffect } from "react";
type Props = {
    interval?: number; // optional  - if parent doesn't set the interval then it will be 1000ms (line 12)
}
const Timer: React.FC<Props> = ({interval})=> {   // FC functional  component
    const [time, setTime] = React.useState(new Date());
    function tic(): void {
        console.log('kuku');
        setTime(new Date());
    }
    useEffect(()=> {
        setInterval(tic, interval || 1000);
        },[]);   // don't cal  'setInterval' when  'time' changes
    
    return <div style={{marginLeft: "10vw"}}>
        <h3>Current Time</h3>
        <label>{time.toLocaleTimeString()}</label>
    </div>
}
export default Timer;