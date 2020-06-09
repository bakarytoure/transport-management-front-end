import React from "react";
import { useParams, useHistory } from "react-router-dom";
import CityServiceData from "../services/CityService";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InsideCity from "./InsideCity/InsideCity";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
function Home(props) {
  const [city, setCity] = React.useState([]);
  const [currentcity, setCurrentCity] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [line, setLine] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [searchTitle, setSearchTitle] = React.useState("");
  const { id } = useParams();
  //let history = useHistory();
  let newid = city.find((item) => item.id === parseInt(id));
  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value; //.toUpperCase();
    setSearchTitle(searchTitle);
  };

  const setActiveCity = (city, index) => {
    setCurrentCity(city);
    setCurrentIndex(index);
  };

  const findByCityName = (e) => {
    e.preventDefault();
    CityServiceData.findByCityName(searchTitle)
      .then((response) => {
        setCity(response.data);
        const city = response.data;
        console.log(city);
      })
      .catch((e) => {
        console.log(e);
      });
    setSearchTitle("");
  };
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];
  return (
    <div className="container  mx-auto">
      <Paper component="form" className="Home w-50" elevation={2}>
        <InputBase
          className="input"
          placeholder="Find your City"
          value={searchTitle}
          inputProps={{ "aria-label": "Find you City" }}
          onChange={onChangeSearchTitle}
        />

        <IconButton type="submit" aria-label="search" onClick={findByCityName}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper>
        <ul className="list-group">
          {city &&
            city.map((city, index) => (
              <InsideCity key={index} title={city.cityName} />
            ))}
        </ul>
      </Paper>
    </div>
  );
}
export default Home;
