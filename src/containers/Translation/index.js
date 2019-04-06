import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getTranslationList } from "./store/actions";
import { Redirect } from "react-router-dom";

class Translation extends PureComponent {
  getList() {
    return this.props.list.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    const { login } = this.props;
    return login ? <div>{this.getList()}</div> : <Redirect to="/" />;
  }
  //componentDidMount在服务器端不执行
  componentDidMount() {
    const { list } = this.props;
    if (!list.length > 0) {
      this.props.getTranslationList();
    }
  }
}
Translation.loadData = store => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getTranslationList());
};

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);
