import React, { useState } from "react";

import "../../../css/Dashboard.css";

import WelcomeComponent from "../../sections/WelcomeComponent";
import TinkerNewsComponent from "../../sections/TinkerNewsComponent";
import ProjectsList from "../../lists/ProjectsList";

import tinkercartPlus from "../../../img/tinkercart.png";

//import { getProjects, createProject } from "../../../actions/projectActions";

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

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  const initialNews = [
    {
      id: "1",
      title: "Happy Teacher Appreciation Week!",
      description: "You truly are amazing! <3",
    },
    {
      id: "2",
      title: "Weekly challenge!",
      description:
        "We're going way way wayyyy back to Prehistory. Make a project about things that lived thousand (or millions) of year ago!",
    },
    {
      id: "3",
      title: "3D printer Tutorial Update",
      description: "Have a look at our improved 3D printer tutorial!",
    },
    {
      id: "4",
      title: "Yummy!",
      description:
        "We're so excited to share a new cooking project: World Cuisine! In this project, you will make creative cheeseburgers that we're loving in the community, and pass along tips on how to recreate it. ",
    },
  ];

  // const initialWelcome = [
  //   {
  //     id: "1",
  //     description: "Try out starter projects",
  //   },
  //   {
  //     id: "2",
  //     description: "Join a class with your class code",
  //   },
  //   {
  //     id: "3",
  //     description: "Download the Tinker Cart plans",
  //   },
  //   {
  //     id: "4",
  //     description: "wow",
  //   },
  // ];

  const [news] = useState(initialNews);
  // const [welcome, setWelcome] = useState(initialWelcome);
  // console.log(news);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({JSON.stringify(error)}</p>;
  const projects = data.projects;

  return (
    <div className='dashboardcontainer'>
      <div className='welcome-item card'>
        <img
          src={tinkercartPlus}
          className='tinkercart-img-position'
          alt='Tinker Cart model'
          height='118em'
          width='118em'
        />
        <WelcomeComponent items={[]} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5em" }}>
          <div className='welcomelistitem'>Try out our <br/> projects</div>
          <div className='welcomelistitem'>Wonder, Ask, Create <br/>  Try & Fix</div>
          <div className='welcomelistitem'>Collaborate with <br/> your peers!</div>
        </div>
      </div>

      {/* <div className='welcome-item card'>
        <img
          src={tinkercartPlus}
          className='tinkercart-img-position'
          alt='Tinker Cart model'
          height='100em'
          width='100em'
        />
        <WelcomeComponent items={welcome} />
      </div> */}
      <div className='tinker-news-item card'>
        <TinkerNewsComponent news={news} />
      </div>
      <ProjectsList
        category='Featured'
        projects={projects.filter((project) => {
          return project.tags.indexOf("Featured") !== -1;
        })}
      />
      <ProjectsList
        category='Science'
        projects={projects.filter((project) => {
          return project.tags.indexOf("Science") !== -1;
        })}
      />
      <ProjectsList
        category='Wood-working'
        projects={projects.filter((project) => {
          return project.tags.indexOf("Wood-Working") !== -1;
        })}
      />
      <ProjectsList
        category='Coding'
        projects={projects.filter((project) => {
          return project.tags.indexOf("Coding") !== -1;
        })}
      />
      <ProjectsList
        category='Cooking'
        projects={projects.filter((project) => {
          return project.tags.indexOf("Cooking") !== -1;
        })}
      />
    </div>
  );
};

export default Dashboard;
