import React, { Component } from "react";
import { Input } from "semantic-ui-react";

import CategoryBubblesList from "src/components/lists/CategoryBubblesList";

class SearchBarComponent extends Component {
  render() {
    const {
      categories,
      activeItems,
      handleSelection,
      handleUnselection
    } = this.props;

    return (
      <div>
        <div>
          <Input
            className='icon'
            icon='search'
            placeholder='Search...'
            id='search-bar-projects'
          />
        </div>
        <CategoryBubblesList
          categories={categories}
          activeItems={activeItems}
          handleSelection={handleSelection}
          handleUnselection={handleUnselection}
        />
      </div>
    );
  }
}

export default SearchBarComponent;
