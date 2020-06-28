import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CityServiceData from "../../services/CityService";
import Modal from "../Modal";
import "w3-css/3/w3.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
    paddingRight: "0",
    width: "100%",
    //minHeight: "10rem",
  },
}));

function Line(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [line, setLine] = React.useState([]);
  const handleChange = (e, newValue) => {
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
    setValue(newValue);
  };

  return (
    <>
      {/** middle column */}

      <div className="col-md-6">
        <div className="w3-container w3-card w3-white w3-margin-left w3-margin-right w3-margin-bottom m3">
          <br />

          <h4>Available bus</h4>

          <hr className="w3-clear" />

          <Grid item xs={12} sm={12} className="container w-100">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Bus" {...a11yProps(0)} />
                <Tab label="Train" {...a11yProps(1)} />
                <Tab label="Plane" {...a11yProps(2)} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className="Button">
              <span className="m-1 text-center text-capitalize">
                available bus
              </span>
              <br />
              {line.map((line, index) => (
                <Modal
                  key={index}
                  destination={line.destination}
                  line={line.number}
                  link={line.link}
                />
              ))}
            </TabPanel>

            <TabPanel value={value} index={1}>
              Train
            </TabPanel>
            <TabPanel value={value} index={2}>
              Plane
            </TabPanel>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Line;
