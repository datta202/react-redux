import React from "react";
import { connect } from "react-redux";
import { callConsole } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.props.triggerCallConsole();
  }

  render() {
    console.log(this.props);
    return <div>App</div>;
  }
}

const mapStateToProps = state => {
  return { state: state };
};

const mapDispatchToProps = dispatch => ({
  triggerCallConsole: () => dispatch(callConsole())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
