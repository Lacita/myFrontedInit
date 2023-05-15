import config from "@/config/config";

import {
  http
} from "./http";

const {
  get,
  post,
} = http;


export const commentApi = {
  list: get("/comment/list"),
  add: post("/comment/add"),
  remove: post("/comment/remove"),
};

export const featuresApi = {
  ipconfig: get('/ipconfig')
};