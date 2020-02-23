import React, { Component } from "react";

import BubbleItem from "src/components/items/BubbleItem";

class CategoryBubblesList extends Component {
  render() {
    const {
      categories,
      activeItems,
      handleUnselection,
      handleSelection
    } = this.props;

    return (
      <div className='categories-bubble-list'>
        {categories.map(category => (
          <BubbleItem
            key={category.id}
            isActive={activeItems.indexOf(category.name) !== -1}
            category={category}
            handleSelection={handleSelection}
            handleUnselection={handleUnselection}
          />
        ))}
      </div>
    );
  }
}

export default CategoryBubblesList;
