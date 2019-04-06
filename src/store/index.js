import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
import { reducer as headerReducer } from "../components/Header/store";
import severAxios from "../server/request";
import clientAxios from "../client/request";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
});

export const getStore = () => {
  //改变服务端store的内容，用severAxios
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(severAxios)));
};

export const getClientStore = () => {
  //改变客户端store的内容，用clientAxios
  return createStore(reducer, window.context.state, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
