import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import '../projects.css'

class BubbleItem extends Component {
  constructor(props) {
	super(props);
  }

//   handleActiveSelection = (newActiveItem) => {
// 	newActiveItem.name = evt.target.value;
//     this.setState(({ activeItem }) => ({
//       activeItem: [...activeItem, newActiveItem]
//     }));
//   };

//   handleUnactiveSelection = id => {
//     this.setState(({ activeItem }) => ({
//       activeItem: activeItem.filter(
//         activeItem => activeItem.id !== id //returns the elements of the array that does not match the id that we are passing in our parameter
//       )
//     }));
//   };

  render() {
    const { category, activeItem, handleSelection, handleUnselection } = this.props;
	console.log(activeItem);
    return <Button onClick={this.handleSelection} value={category.name} className='bubble-container'>{category.name}</Button>;
  }
}

export default BubbleItem;
