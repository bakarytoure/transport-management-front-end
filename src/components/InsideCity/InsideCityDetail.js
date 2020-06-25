import React from "react";
import Grid from "@material-ui/core/Grid";
import Line from "./Line";
import Stop from "./Stop";
import Bus from "./Bus";
import Ticket from "./Ticket";
import TravelPlan from "./TravelPlan";
import Operator from "./Operator";
import { useParams } from "react-router-dom";
import TransportSchema from "./TransportSchema";
import CityServiceData from "../../services/CityService";
//const {id}= useParams();
function InsideCityDetail(props) {
  const [line, setLine] = React.useState([]);
  const findLineByCity = (e) => {
    e.preventDefault();
    CityServiceData.findLineByCity(1)
      .then((response) => {
        setLine(response.data);
        const line = response.data;
        console.log(line);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div
        class="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "80px" }}
      >
        <div class="w3-row">
          <Bus />
          <Line />
          <Stop />
          <Ticket />
        </div>
      </div>
      {/*<div className="container w-100 ">
        <Grid item sm={12} className="d-flex justify-content-between mt-5">
          <Line />
          <Stop />
        </Grid>
        <Grid item sm={12} className="d-flex justify-content-between mt-1">
          <Ticket />
          <Operator />
        </Grid>

        <Grid item sm={12} className="d-flex justify-content-between mt-1">
          <TravelPlan />
          <TransportSchema />
        </Grid>
  </div>*/}
    </>
  );
}
export default InsideCityDetail;
