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
const findTicketByCity = (id) => {
  return http.get(`/city/${id}/ticket`);
};
const findOperatorByCity = (id) => {
  return http.get(`/city/${id}/operators`);
};
export default {
  findByCityName,
  getAll,
  findLineByCity,
  findTicketByCity,
  findOperatorByCity,
};
