import React, { PureComponent } from "react";

class NotFound extends PureComponent {
  componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.NotFound = true);
  }

  render() {
    return <div>404 not found</div>;
  }
}

export default NotFound;
