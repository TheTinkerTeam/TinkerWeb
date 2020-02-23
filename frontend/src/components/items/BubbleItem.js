import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "src/css/projects.css";

class BubbleItem extends Component {
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