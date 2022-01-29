import React, { useState } from "react";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { time } = hoursMinSecs;
  const [now_time, setTime] = useState(time);
  const [[hr,min,sec],setTimes] = useState([Math.floor(now_time / 3600),Math.floor(now_time / 60),now_time % 60]);

  const tick = () => {
    setTime(now_time + 1);
    setTimes([Math.floor(now_time / 3600),Math.floor(now_time / 60),now_time % 60]);

  };
  const numToBinaryString = (temp) => {
      console.log(temp);
    let res = ``;
    let num = temp;
    while (num !== 0){
        let a = Math.floor(num / 2);
        let b = num % 2;
        if (b === 0){
            res = "0" + res;
        }
        else{
            res = "1" + res;
        }
        num = a;
    }

    return res;
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${numToBinaryString(hr).padStart(6, "0")}`}</p>
      <p>{`${numToBinaryString(min).padStart(6, "0")}`}</p>
      <p>{`${numToBinaryString(sec).padStart(6, "0")}`}</p>
    </div>
  );
};

export default CountDownTimer;
