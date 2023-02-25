import React from 'react';
// import './App.css';
import Timer from './components/Timer';

function App() {
  return <div style={{display: "flex", alignItems: "center", marginTop: "10vh", flexDirection:"column"}}>
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <Timer timeZone='Asia/Urumqi' city="Beijing" interval={2000}/>
      <Timer timeZone='Europe/London' city="London"/>
    </div>
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <Timer timeZone='Europe/Paris' city="Paris"/>
      <Timer timeZone='Asia/Jerusalem' city="Jerusalem"/>
    </div>
  </div>
}


export default App;

