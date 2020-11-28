import React from "react";
import Lights from "./Lights";


const styles = {
  container: {
    backgroundColor: "#313638",
    height: "380px",
    width: "100px",
    borderRadius: "20px",
    marginTop: "10px",
    border: "10px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

const TrafficLights = (props) => {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <Lights
          activatedLight={props.activatedLight}
          setActivatedLights={props.setActivatedLights}
        />
      </div>
    </React.Fragment>
  );
};
export default TrafficLights;
