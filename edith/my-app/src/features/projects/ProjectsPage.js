import React, { Component } from "react";
import "./projects.css";
import "../dashboard/Dashboard.css";
import ProjectsDisplayedList from "./ProjectsDisplayedList";
import { connect } from "react-redux";
import SearchBarComponent from "./searchBar/SearchBarComponent";

const mapStateToProps = state => ({
  projects: state.projects,
  categories: state.projectsCategory
});

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

    console.log(activeItems);

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
          <div>
            {activeItems[0] === "All" ? (
              <ProjectsDisplayedList projects={projects} />
            ) : (
              <ProjectsDisplayedList
                projects={projects.filter(project => {
                  return (
                    project.tags.filter(value => activeItems.includes(value))
                      .length > 0
                  );
                })}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProjectsPage);
