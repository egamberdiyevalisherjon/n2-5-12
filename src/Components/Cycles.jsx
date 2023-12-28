import { Component } from "react";

// mount
// constructor
// getDerivedStateFromProps
// render
// componentDidMount

// update
// getDerivedStateFromProps
// shouldComponentUpdate
// ?
// render
// componentDidUpdate

// unmount
// componentWillUnmount

class Cycles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
      page: 1,
    };
    this.handleInc = this.handleInc.bind(this);
    console.log("constructor");
    this.unmounted = false;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { ...state, age: props.age };
  }

  handleMovement() {
    console.log("movement detected");
  }

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("mousemove", this.handleMovement);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return this.state.page !== nextState.page;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("mousemove", this.handleMovement);
    this.unmounted = true;
  }

  render() {
    console.log("render");
    return (
      <div>
        Hooks
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleInc}>Inc</button>
      </div>
    );
  }

  handleInc() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }
}

export default Cycles;
