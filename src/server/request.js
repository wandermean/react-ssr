import axios from "axios";
import config from '../../config';

const instance = req =>
  axios.create({
    baseURL: "http://47.95.113.63/ssr/",
    params: {
      secret: config.secret
    },
    headers: {
      cookie: req.get("cookie") || ""
    }
  });

export default instance;
