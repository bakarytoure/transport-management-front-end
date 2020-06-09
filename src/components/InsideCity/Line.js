import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CityServiceData from "../../services/CityService";

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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingRight: "0",
  },
}));

function Line(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper_L text-secondary container">
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
        <TabPanel value={value} index={0} onChange={findLineByCity}>
          {line.map((line, index) => (
            <Button key="index">
              <Link to={line.link}>{line.number}</Link>
            </Button>
          ))}
          1 2 3 4 5 6
        </TabPanel>
        <TabPanel value={value} index={1}>
          Train
        </TabPanel>
        <TabPanel value={value} index={2}>
          Plane
        </TabPanel>
      </Paper>
    </Grid>
  );
}

export default Line;
