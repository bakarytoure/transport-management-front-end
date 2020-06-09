import React from "react";
import Grid from "@material-ui/core/Grid";
import Line from "./Line";
import Stop from "./Stop";
import Ticket from "./Ticket";
import TravelPlan from "./TravelPlan";
import Operator from "./Operator";
import TransportSchema from "./TransportSchema";
function InsideCityDetail(props) {
  return (
    <div className="container w-100 ">
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
    </div>
  );
}

export default InsideCityDetail;
