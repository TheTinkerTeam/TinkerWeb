import React, { Component } from "react";
import { connect } from "react-redux";

import "src/css/projects.css";
import "src/css/Dashboard.css";
import ProjectsDisplayedList from "src/components/lists/ProjectsDisplayedList";
import SearchBarComponent from "src/components/sections/SearchBarComponent";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      if (category.name === "All") {
        this.setState(({ activeItems }) => ({
          activeItems: ["All"]
        }));
      } else {
        this.setState(({ activeItems }) => ({
          activeItems: [...activeItems, category.name]
        }));
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
    if (this.state.activeItems.length === 0) {
      this.setState({
        activeItems: ["All"]
      });
    }
  }

  render() {
    const { activeItems } = this.state;
    const { projects, categories } = this.props;

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
          <SearchBarComponent
            handleSelection={this.handleSelection}
            handleUnselection={this.handleUnselection}
            activeItems={activeItems}
            categories={categories}
          />
          {activeItems[0] === "All" ? (
            <ProjectsDisplayedList projects={projects} />
          ) : (
            <ProjectsDisplayedList
              projects={projects.filter(project => {
                return (
                  project.tags.filter(tag => activeItems.includes(tag)).length >
                  0
                );
              })}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  categories: state.projectsCategory
});

export default connect(mapStateToProps)(ProjectsPage);