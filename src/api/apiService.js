import axios from "axios";
let API_URL = "http://localhost:8080/api";

export async function callApi(endpoint, method = "GET", body) {
  return await axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((e) => {
    console.log(e);
  });
}

export async function GET_ALL_PRODUCTS(endpoint) {
  return await callApi(endpoint, "GET");
}
export async function GET_BY_SHOW_HOME(endpoint, LOCATION) {
  return await callApi(endpoint + "/getByShowHome/" + LOCATION, "GET");
}
export async function GET_PRODUCT_ID(endpoint, id) {
  return await callApi(endpoint + "/" + id, "GET");
}
export async function POST_ADD_PRODUCT(endpoint, data) {
  return await callApi(endpoint, "POST", data);
}
export async function PUT_EDIT_PRODUCT(endpoint, data) {
  return await callApi(endpoint, "PUT", data);
}
export async function DELETE_PRODUCT_ID(endpoint) {
  return await callApi(endpoint, "DELETE");
}
export async function GET_ALL_CATEGORIES(endpoint) {
  return await callApi(endpoint, "GET");
}
export function GET_ALL_SLIDERS(endpoint){
  return callApi(endpoint,"GET");
}
