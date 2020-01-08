import React, { Component } from "react";
import "./Dashboard.css";
import WelcomeComponent from "./WelcomeComponent";
import TinkerNewsComponent from "./TinkerNewsComponent";
import ProjectsList from "./ProjectsList";
import tinkercart from "./img/tinkercart.png";

const projectsFromDatabase = [
  {
    id: "1",
    title: "Code'n'Tell",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Code'n'Tell' project",
    learning_objectives:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subjects: ["design", "computer science"],
    tags: ["Featured", "Coding"],
    grade: [5, 6]
  },
  {
    id: "2",
    title: "Lifting & Moving",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Lifting & Moving' project",
    learning_objectives:
      "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Et ligula ullamcorper malesuada proin libero. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Nisi est sit amet facilisis. Sed libero enim sed faucibus turpis in eu mi bibendum. Gravida cum sociis natoque penatibus et magnis dis. Urna et pharetra pharetra massa massa. Tempor orci dapibus ultrices in iaculis nunc. Quam viverra orci sagittis eu volutpat. Pellentesque pulvinar pellentesque habitant morbi tristique. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. A condimentum vitae sapien pellentesque habitant morbi tristique. Sit amet consectetur adipiscing elit ut aliquam. Eu nisl nunc mi ipsum faucibus vitae. Quis enim lobortis scelerisque fermentum.",
    subjects: ["design", "maths", "science"],
    tags: ["Featured", "Science"],
    grade: [7]
  },
  {
    id: "3",
    title: "Keeping birds safe",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Wood-working"],
    grade: [7, 8]
  },
  {
    id: "4",
    title: "Challenging the Future",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Innovation", "Entrepreuneurship"],
    grade: [7, 8]
  },
  {
    id: "5",
    title: "The 27th letter",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Graphics", "Design"],
    grade: [7, 8]
  },
  {
    id: "6",
    title: "Make it Better",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science"],
    grade: [4]
  },
  {
    id: "7",
    title: "The House of the Future",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Maths", "Wood-working"],
    grade: [8]
  },
  {
    id: "8",
    title: "Medium is the Message",
    imageURL: "https://via.placeholder.com/150",
    description: "This is the description of the 'Keeping birds safe' project",
    learning_objectives:
      "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Quam quisque id diam vel quam elementum pulvinar etiam non. Dictum varius duis at consectetur lorem donec massa. Amet est placerat in egestas erat. At volutpat diam ut venenatis tellus. Sit amet facilisis magna etiam tempor orci eu lobortis. Sit amet mauris commodo quis imperdiet massa tincidunt. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Nisi vitae suscipit tellus mauris a diam maecenas sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Vitae ultricies leo integer malesuada. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Tristique senectus et netus et malesuada fames. Et ultrices neque ornare aenean euismod elementum nisi quis.",
    subjects: ["design", "maths", "Science"],
    tags: ["Featured", "Science", "Electronics", "Design"],
    grade: [4]
  },
];

class Dashboard extends Component {
  state = {
    projects: projectsFromDatabase
  };

  render() {
    const { projects } = this.state;

    return (
      <div className='dashboardcontainer'>
        <div className='welcome-item'>
          <img
            src={tinkercart}
            className='tinkercart-img-position'
            alt='Tinker Cart model'
            height='100em'
            width='100em'
          />
          <WelcomeComponent />
        </div>
        <div className='tinker-news-item'>
          <TinkerNewsComponent />
        </div>
        <ProjectsList
          category='Featured'
          projects={projects.filter(project => {
            return project.tags.indexOf("Featured") !== -1;
          })}
        />
        <ProjectsList
          category='Science'
          projects={projects.filter(project => {
            return project.tags.indexOf("Science") !== -1;
          })}
        />
        <ProjectsList
          category='Wood-working'
          projects={projects.filter(project => {
            return project.tags.indexOf("Wood-working") !== -1;
          })}
        />
        <ProjectsList
          category='Coding'
          projects={projects.filter(project => {
            return project.tags.indexOf("Coding") !== -1;
          })}
        />
        <ProjectsList
          category='Cooking'
          projects={projects.filter(project => {
            return project.tags.indexOf("Cooking") !== -1;
          })}
        />
      </div>
    );
  }
}

export default Dashboard;
