import Axios from "axios";

/**
 * Axios instance with the basic API URL
 */
const http = Axios.create({
  baseURL: "https://frontend-intern-challenge-api.iurykrieger.now.sh"
});

/**
 * Function to handle the request before send it
 * @param config Configuration data of the current request
 */
const successRequest = (config) => {
  return config;
}

/**
 * Function to handle the request error
 * @param error Request error object
 */
const failRequest = (error) => {
  alert("Houve um problema ao tentar realizar a operação. Por favor, tente novamente mais tarde.");

  console.error(error);
  return Promise.reject(error);
}

/**
 * Function to handle the response when it succeed
 * @param response Success response from the request
 */
const successResponse = (response) => {
  const { data } = response;

  return data;
}

/**
 * Function to handle the response when it failed
 * @param error Error response from the request
 */
const failResponse = (error) => {
  alert("Houve um problema após realizar a operação. Por favor, tente novamente mais tarde.");

  console.error(error);

  if (error.response.status === 401) {
    const requestConfig = error.config;
    return axios(requestConfig);
  }

  return Promise.reject(error);
}


http.interceptors.request.use(successRequest, failRequest);
http.interceptors.response.use(successResponse, failResponse);

export default http;
