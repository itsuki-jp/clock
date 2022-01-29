import logo from "./logo.svg";
import React, { useState } from "react";
import CountDownTimer from "./components/CountDownTimer";
function App() {

  let currentTime = new Date();
  // const hoursMinSecs = {hours:currentTime.getHours(), minutes: currentTime.getMinutes(), seconds: currentTime.getSeconds()}
  const hoursMinSecs = {time:1000};
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
