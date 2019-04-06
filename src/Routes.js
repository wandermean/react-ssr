import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.loadData,//获取数据后再做服务器端渲染
      key: 'home'
    },
    {
      path: "/login",
      component: Login,
      exact: true,
      key: 'login'
    }
  ]
}]

