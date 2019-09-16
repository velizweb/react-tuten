import axios from "axios";

/**
 * Send data to login to the government API.
 * @param {string} email, Email of the user.
 * @param {String} password, Secret password of the user.
 * @returns {Promise}
 */
export const fetchLogin = (email, password) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const url = `https://dev.tuten.cl/TutenREST/#!/user/login`;

  const options = {
    data: { email, password, app: "APP_BCK" },
    method: "POST",
    headers,
    url
  };

  return axios(options);
};
