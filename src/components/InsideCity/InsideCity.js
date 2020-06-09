import React from "react";
//import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import img from "../../assets/img/dakar-dem-dik.jpg";
import img1 from "../../assets/img/senegal-dem-dik.jpg";
import img2 from "../../assets/img/Train-express.jpg";
import img3 from "../../assets/img/Afrique-Dem-Dikk.jpg";
const InsideCity = (props) => {
  return (
    <div className="conatiner pt-2 MainPageByCity px-0">
      <Typography variant="h2" gutterBottom className="typography">
        {props.title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">
            <Grid item xs={12} sm={12}>
              <img src={img} alt="image" height="250" width="100%" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <img src={img2} height="250" width="100%" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" className="mt-2" className="mt-2">
                <Link to="/insidecitydetail">Travel inside City</Link>
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
          //className={classes.paper}
          >
            <Grid item xs={12} sm={12}>
              <img src={img1} alt="image" height="250" width="100%" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <img src={img3} alt="image" height="250" width="100%" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" className="mt-2">
                Travel between City
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default InsideCity;