import React, { useState } from "react";
import { connect } from "react-redux";

import "../../../css/projects.css";
import "../../../css/Dashboard.css";

import ProjectsDisplayedList from "../../lists/ProjectsDisplayedList";
import SearchBarComponent from "../../sections/SearchBarComponent";
import { getProjects } from "../../../actions/projectActions";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      description
      imageURL
      learning_objectives
      subjects
      tags
      grades
    }
  }
`;

const ProjectsPage = props => {
  const initialState = {
    activeItems: ["All"]
  };
  const [state, setState] = useState(initialState);

  const handleSelection = category => {
    if (state.activeItems.includes("All")) {
      setState(({ activeItems }) => ({
        activeItems: [
          ...activeItems.filter(activeItems => activeItems !== "All"),
          category.name
        ]
      }));
    } else {
      if (category.name === "All") {
        setState(({ activeItems }) => ({
          activeItems: ["All"]
        }));
      } else {
        setState(({ activeItems }) => ({
          activeItems: [...activeItems, category.name]
        }));
      }
    }
  };

  const handleUnselection = name => {
    if (state.activeItems.includes("All")) {
      setState(({ activeItems }) => ({
        activeItems: activeItems.filter(activeItems => activeItems === "All")
      }));
    } else {
      setState(({ activeItems }) => ({
        activeItems: activeItems.filter(
          activeItems => activeItems !== name //returns the elements of the array that does not match the name that we are passing in our parameter
        )
      }));
    }
  };

  const { activeItems } = state;
  const { categories } = props;

  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const projects = data.projects;
  console.log(projects)
  return (
    <div className="projects-container">
      <div className="red-title rotate-title"> 
        <span>Super </span>
        <span className="superprojects-text">Pro</span>
        <span className="superprojects-text" id="supertinker-i">
          j
        </span>
        <span className="superprojects-text">ects</span>
      </div>
      <div className="projects-card">
        <SearchBarComponent
          handleSelection={handleSelection}
          handleUnselection={handleUnselection}
          activeItems={activeItems}
          categories={categories}
        />
        {activeItems[0] === "All" ? (
          <ProjectsDisplayedList projects={projects} />
        ) : (
          <ProjectsDisplayedList
            projects={projects.filter(project => {
              return (
                project.tags.filter(tag => activeItems.includes(tag)).length > 0
              );
            })}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projects,
  categories: [
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
      name: "Wood-Working"
    },
    {
      id: "4",
      name: "Coding"
    },
    {
      id: "5",
      name: "Cooking"
    },
    {
      id: "6",
      name: "Innovation"
    }
  ]
});

const mapDispatchToProps = {
  getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
