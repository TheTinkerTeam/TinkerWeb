import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class BubbleItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
	  const {category} = this.props;

    return (
		<Button>{category.name}</Button>
	);
  }
}

export default BubbleItem;
