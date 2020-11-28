import React from "react";

const styles = {
  car: {
    minHeight: "200px",
    minWidth: "200px",
    margin: "0 100px",
    position: "relative",
    animationDuration: "9s",
    animationIterationCount: "infinite",
    animationTimingFunction: "easy-in",
  },
  carLeftToRight: {
    animationName: "carLeftToRight",
  },
  carRightToLeft: {
    animationName: "carRightToLeft",
  },
};

const Car = props => {
  return (
    <React.Fragment>
        {props.activatedLight !== 'red' ? (
          <img
            src={props.car}
            alt="car"
            style={
              props.direction === 'right'
                ? { ...styles.car, ...styles.carLeftToRight }
                : { ...styles.car, ...styles.carRightToLeft }
            }
          ></img>
        ) : null}
    </React.Fragment>
  );
};

export default Car;
