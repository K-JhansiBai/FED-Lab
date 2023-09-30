import React, { useState, useEffect } from 'react';

function DigitalClock(){
  const [mytime, setTime] = useState('');
  const tick=()=>{
    let time = new Date().getHours()+": "+new Date().getMinutes()+": ".padStart(2,'0')+ new Date().getSeconds();
    if (new Date().getHours()<12)
    {
        time = time + " AM"
    }
    else{
        time = time + " PM"
    }
    setTime(time);
  };

  useEffect(() => {
    const t = setInterval(tick,1000);
    return ()=>{
        clearInterval(t);
    }
  },[mytime])

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{mytime}</h2>
    </div>
  );
  }

export default DigitalClock;
