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
      activeItems: ["All"]
    };
  }

  handleSelection = category => {
    if (this.state.activeItems.includes("All")) {
      this.setState(({ activeItems }) => ({
        activeItems: [
          ...activeItems.filter(activeItems => activeItems !== "All"),
          category.name
        ]
      }));
    } else {
        if (category.name === 'All') {
          this.setState(({activeItems}) => ({
            activeItems: [
              'All'
            ]
          }))
        } else {
          this.setState(({ activeItems }) => ({
            activeItems: [...activeItems, category.name]
          }))
      }
    }
  };

  handleUnselection = name => {
    if (this.state.activeItems.includes("All")) {
      this.setState(({ activeItems }) => ({
        activeItems: activeItems.filter(activeItems => activeItems === "All")
      }));
    } else {
      this.setState(({ activeItems }) => ({
        activeItems: activeItems.filter(
          activeItems => activeItems !== name //returns the elements of the array that does not match the name that we are passing in our parameter
        )
      }));
    }
  };

  componentDidUpdate() {
    if (this.state.activeItems.length === 0){
      this.setState(({activeItems}) => ({
        activeItems: [
          'All'
        ]
      }))
    }
  }

  // componentDidMount() {
  //   console.log(this.state.activeItems);
  // }

  render() {
    const { categories, activeItems } = this.state;
    console.log(this.state);
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
            activeItems={activeItems}
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
