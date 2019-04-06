import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store/";

class Header extends PureComponent {
  render() {
    const { login, handleLogin, handleLogout } = this.props;
    return (
      <div>
        <Link to="/">首页</Link>
        <br />
        {login ? (
          <Fragment>
            <Link to="/translation">翻译列表</Link>
            <br />
            <div onClick={handleLogout}>退出</div>
          </Fragment>
        ) : (
          <div onClick={handleLogin}>登陆</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
