import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("component mounted");

    const iid = setInterval(() => {
      setTime(new Date());
      console.log("time updated");
    }, 1000);

    return () => {
      console.log("clock unmounted");
      clearInterval(iid);
    };
  }, []);

  return <div className="">{time.toLocaleTimeString()}</div>;
};

export default Clock;
