import React, { Component } from "react";
import { connect } from "react-redux";
import {incrementCounter, decrementCounter} from './testActions'
import { Button } from "semantic-ui-react";

// mapStateToProps is a function to map our store state to our component props
// so we can access data in the store from our component
const mapStateToProps = state => ({
  data: state.test.data
});

// mapDispatchToProps or actions as in the tuto
// the actions are gonna be available in the props, inside the component
const mapDispatchToProps = {
	incrementCounter,
	decrementCounter
}

class TestComponent extends Component {
  render() {
	  const {data, incrementCounter, decrementCounter} = this.props
    return (
      <div>
        <h1>This is the Test Component</h1>
		<h3>The answer is: {data}</h3>
		<Button onClick={incrementCounter} positive content='increment' />
		<Button onClick={decrementCounter} negative content='decrement' />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
