const axios = require("axios");

const request = ({ url, method = "GET", body = null }) => {
  const config = {
    method,
    url,
    headers: {
      "x-api-key": process.env.APIKEY,
    },
    data: body,
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw {
        status: error.response.status,
        message: error.response.statusText,
        data: error.response.data,
      };
    });
};

module.exports = request;
