import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MyCarouse from "./Carousel1";
import "w3-css/3/w3.css";
function Ticket() {
  return (
    <>
      {/** right column*/}
      <div className="w3-col m2">
        <div className="w3-card w3-round w3-white w3-center ">
          <div className="w3-container">
            <p>Ticket Types and Price:</p>
            {/*<img src={tick1} alt="Forest" style={{ width: "100%" }} />*/}
            <MyCarouse />
          </div>
        </div>
        <br />
        <div className="w3-card w3-round w3-white w3-center">
          <div className="w3-container">
            <p>Companies</p>

            <div className="w3-row w3-opacity">
              <div className="w3-half">
                <button className="w3-button w3-block w3-green w3-section w3-margin-left">
                  <a
                    href="http://demdikk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DDK
                  </a>
                  <br />
                  Public
                </button>
              </div>
              <div className="w3-half">
                <button className="w3-button w3-block w3-red w3-section">
                  <a
                    href="http://aftu-senegal.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ATFU
                  </a>
                  <br />
                  Private
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** End of the right column*/}
    </>
  );
}

export default Ticket;
