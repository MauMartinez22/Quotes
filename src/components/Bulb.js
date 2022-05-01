import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <div
        className="bulb"
        style={{ background: isOn ? "#ffff00" : "gray" }}
      ></div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>
    </div>
  );
};

export default Bulb;
