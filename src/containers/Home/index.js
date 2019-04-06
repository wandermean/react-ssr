import React, { Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
  getList() {
    return this.props.list.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    return (
      <div>
        {this.getList()}
        <button
          onClick={() => {
            alert("click12");
          }}
        />
      </div>
    );
  }
  //componentDidMount在服务器端不执行
  componentDidMount() {
    if(!this.props.list.length>0){
      this.props.getHomeList();
    }
  }
}

Home.loadData = store => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
