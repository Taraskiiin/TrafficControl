import React, { useState } from "react";

import TrafficLight from "./TrafficLight/TrafficLight";
import Street from "./Street/Street";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#3685b5",
    minHeight: "100vh",
  },
};

const StreetInterception = () => {
  const [activatedLight, setActivatedLights] = useState("yellow");
  const [direction, setDirection] = useState("down");

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (activatedLight === "yellow") {
        if (direction === "down") {
          setActivatedLights("green");
        } else if (direction === "up") {
          setActivatedLights("red");
        }
      } else if (activatedLight === "green") {
        setDirection("up");
        setActivatedLights("yellow");
      } else if (activatedLight === "red") {
        setDirection("down");
        setActivatedLights("yellow");
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div style={styles.container}>
      <TrafficLight
        activatedLight={activatedLight}
        setActivatedLights={setActivatedLights}
      />
      <Street activatedLight={activatedLight} />
    </div>
  );
};
export default StreetInterception;
