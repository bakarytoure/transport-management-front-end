import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import img1 from "../../assets/img/dakar-dem-dik.jpg";
import img2 from "../../assets/img/arret-bus.jpg";
import "w3-css/3/w3.css";
function Stop() {
  return (
    <>
      <div className="w3-col m2 ">
        <div className="w3-card w3-round w3-white w3-center w3-margin-bottom ">
          <div className="w3-container ">
            <p>Bus Stop:</p>
            <img src={img2} alt="Forest" style={{ width: "200px" }} />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Stop;
