import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import img1 from "../../assets/img/dakar-dem-dik.jpg";
import img2 from "../../assets/img/arret-bus.jpg";
function Stop() {
  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper_C text-secondary container">
        Vehicule and Stops
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            Dakar Dem Dikk
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paper1_C text-secondary">
              <img
                width="100%"
                height="100%"
                className
                src={img1}
                alt="dakar-dem-dik"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            Bus Stop
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paper1_C text-secondary">
              <img
                className="bg-success"
                width="100%"
                height="100%"
                className
                src={img2}
                alt="dakar-dem-dik"
              />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Stop;
