import React, { Component } from "react";
import BubbleItem from "./BubbleItem";

class CategoryBubblesList extends Component {
  constructor(props) {
	super(props);
  }

  render() {
    // const { categories, activeItem, addActiveItem, handleUnselection, handleSelection } = this.props;
    const { categories, activeItem, handleUnselection, handleSelection } = this.props;

    return (
      <div className='categories-bubble-list'>
        {categories.map(category => (
			<BubbleItem
				key={category.id}
				activeItem={activeItem}
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
