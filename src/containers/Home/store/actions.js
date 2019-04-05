import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  // return async dispatch => {
  //   const res = await axios.get(
  //     "http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE"
  //   );
  //   const list = res.data.data;
  //   dispatch(changeList(list));
  // };
  return dispatch => {
    return axios
      .get("http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE")
      .then(res => {
        const list = res.data.data;
        dispatch(changeList(list));
      });
  };
};
