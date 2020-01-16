import React, { Component } from "react";
import "./projects.css";
import "../dashboard/Dashboard.css";
import { Input } from "semantic-ui-react";
import CategoryBubblesList from "./categoriesBubbleComponent/CategoryBubblesList";
import ProjectsDisplayedList from "./ProjectsDisplayedList";
import cuid from "cuid";

const categoriesFromDatabase = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "Science"
  },
  {
    id: "3",
    name: "Wood-working"
  },
  {
    id: "4",
    name: "Coding"
  },
  {
    id: "5",
    name: "Cooking"
  }
];
class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categoriesFromDatabase,
      activeItem: ["All"]
    };
  }

  handleSelection = ({target: {value}}, newActiveItem) => {
    newActiveItem.id = cuid();
    newActiveItem.name = value;
    this.setState(({ activeItem }) => ({
      activeItem: [...activeItem, newActiveItem]
    }));
  };

  handleUnselection = id => {
    this.setState(({ activeItem }) => ({
      activeItem: activeItem.filter(
        activeItem => activeItem.id !== id //returns the elements of the array that does not match the id that we are passing in our parameter
      )
    }));
  };

  addActiveItem = (activeItem, evt) => {
    this.setState({
      activeItem: [...activeItem, evt.target.value] // object braket notation: we can access the object property by the string value
    })
  }

  render() {
    const { categories, activeItem } = this.state;

    return (
      <div className='projects-container'>
        <div className='red-title rotate-title'>
          <span>Super </span>
          <span className='superprojects-text'>Pro</span>
          <span className='superprojects-text' id='supertinker-i'>
            j
          </span>
          <span className='superprojects-text'>ects</span>
        </div>
        <div className='projects-card'>
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
            activeItem={activeItem}
            addActiveItem={this.addActiveItem}
            handleSelection={this.handleSelection}
            handleUnselection={this.handleUnselection}
          />
          <ProjectsDisplayedList />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
