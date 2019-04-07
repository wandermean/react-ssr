import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getTranslationList } from "./store/actions";
import { Redirect } from "react-router-dom";
import withStyle from "../../withStyle";
import styles from "./style.css";

class Translation extends PureComponent {
  getList() {
    return this.props.list.map(item => (
      <div className={styles.item} key={item.id}>
        {item.title}
      </div>
    ));
  }

  render() {
    const { login } = this.props;
    return login ? (
      <Fragment>
        <Helmet>
          <title>Vincent Translation</title>
          <meta name="description" content="Vincent Translation" />
        </Helmet>
        <div className={styles.container}>{this.getList()}</div>{" "}
      </Fragment>
    ) : (
      <Redirect to="/" />
    );
  }
  //componentDidMount在服务器端不执行
  componentDidMount() {
    const { list } = this.props;
    if (!list.length > 0) {
      this.props.getTranslationList();
    }
  }
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

const ExportTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Translation, styles));

ExportTranslation.loadData = store => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getTranslationList());
};

export default ExportTranslation;
