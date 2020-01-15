import React, { Component } from "react";
import BubbleItem from "./BubbleItem";

class CategoryBubblesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;

    return (
      <div className='categories-bubble-list'>
        {categories.map(category => (
          <BubbleItem key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

export default CategoryBubblesList;
