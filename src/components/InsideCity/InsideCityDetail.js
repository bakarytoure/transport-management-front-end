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
        className="w3-container w3-content Bg  p-0 "
        style={{ maxWidth: "1400px", marginTop: "90px" }}
      >
        <div className="row m-0 bg">
          <Line />
          <TransportSchema />
          <Stop />
          <Ticket />
          <Operator />
          {/*<Bus />
          <TravelPlan />*/}
        </div>
      </div>
    </>
  );
}
export default InsideCityDetail;
