import React from "react";
import MyCarousel from "./MyCarousel";
import "w3-css/3/w3.css";
function Bus() {
  return (
    <>
      {/**Left column */}
      <div className="w3-col m3">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container">
            <h4 className="w3-center">Bus</h4>

            <MyCarousel />
          </div>
        </div>
      </div>
      {/**End of the Left column */}
    </>
  );
}

export default Bus;
