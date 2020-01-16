import React, { Component } from "react";
import BubbleItem from "./BubbleItem";

class CategoryBubblesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      activeItems,
      addActiveItem,
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
            addActiveItem={addActiveItem}
          />
        ))}
      </div>
    );
  }
}

export default CategoryBubblesList;
