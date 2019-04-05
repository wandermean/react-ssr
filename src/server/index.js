import express from "express";
import { render } from "./utils";
import { getStore } from "../store";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";

const app = express();
app.use(express.static("public"));

app.get("*", function(req, res) {
  const store = getStore();
  //根据路由的路径，往store里加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  //让matchRoutes里面所有的组件对应的loadData方法执行一次
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
