import Axios from "axios";

import config from "@/config/config";


let client = Axios.create({
  baseURL: config.baseUrl,

  validateStatus(status) {
    return status < 500;
  }
});

export let http = {
  get: url => {
    let requestFn = (params, config) => client.get(url, {
      params,
      ...config
    });
    requestFn.path = url;
    return requestFn;
  },

  post: url => {
    let requestFn = (data, config) => client.post(url, data, config);
    requestFn.path = url;
    return requestFn;
  },
  put: url => {
    let requestFn = (data, config) => client.put(url, data, config);
    requestFn.path = url;
    return requestFn;
  },
  formPost: url => {
    let requestFn = (data, config) => {
      let formData = new FormData();
      for (let key in data) formData.append(key, data[key]);
      return client.post(url, formData, config);
    };
    requestFn.path = url;
    return requestFn;
  }
};


client.interceptors.request.use(req => {
  console.log('request');
  return req;
});

client.interceptors.response.use(async res => {
  console.log('response');
  return res.data;
});