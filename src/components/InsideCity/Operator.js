import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import "w3-css/3/w3.css";
import { withStyles } from "@material-ui/core/styles";
function createData(name, description, adresse) {
  return { name, description, adresse };
}
const rows = [
  createData("Dakar DEM DIKK", "Public", "http://demdikk.com/"),
  createData("ATFU Senegal", "Private", "http://aftu-senegal.org/"),
];

function Operator() {
  return (
    <>
      <div className="w3-col m6 ">
        <div className="w3-card w3-round w3-white w3-center w3-margin-bottom ">
          <div className="w3-container ">
            <p>Bus Stop:</p>
            {/*<img src={img2} alt="Forest" style={{ width: "200px" }} />*/}
          </div>
        </div>
      </div>
      <br />
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
    </>
  );
}

export default Operator;
