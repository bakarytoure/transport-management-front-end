import http from "../http/Http";
const findByCityName = (cityName) => {
  return http.get(`/city?cityName=${cityName}`);
};
const getAll = () => {
  return http.get("/city");
};
const findLineByCity = (id) => {
  return http.get(`/city/${id}/line`);
};

export default { findByCityName, getAll, findLineByCity };
