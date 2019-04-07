import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getHomeList } from "./store/actions";
import styles from "./style.css";
import withStyle from "../../withStyle.js";

class Home extends Component {
  getList() {
    return this.props.list.map(item => (
      <div className={styles.item} key={item.id}>
        {item.title}
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Vincent Home</title>
          <meta name="description" content="Vincent Home" />
        </Helmet>
        <div className={styles.container}>{this.getList()}</div>
      </Fragment>
    );
  }
  //componentDidMount在服务器端不执行
  componentDidMount() {
    if (!this.props.list.length > 0) {
      this.props.getHomeList();
    }
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Home, styles));

ExportHome.loadData = store => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

export default ExportHome;
