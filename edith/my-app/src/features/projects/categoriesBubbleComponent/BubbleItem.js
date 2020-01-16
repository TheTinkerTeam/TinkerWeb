import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "../projects.css";

class BubbleItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      category,
      isActive,
      handleSelection,
      handleUnselection
    } = this.props;
    return (
      <Button
        onClick={() => {
          isActive
            ? handleUnselection(category.name)
            : handleSelection(category);
        }}
        className={"bubble-container " + (isActive ? "active" : "")}
      >
        {category.name}
      </Button>
    );
  }
}

export default BubbleItem;
