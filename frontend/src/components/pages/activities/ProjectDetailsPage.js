import React, { Component } from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ProjectDetailsPage = props => {
  const routeParam = props.match.params.id;
  console.log(routeParam);

  const GET_PROJECT = gql`
    query getProject($id: ID!) {
      project(id: $id) {
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

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: routeParam }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const project = data.project;
  return (
    <div>
      <h1>This is the ProjectDetails Page</h1>
      <div>I am trying to display the project details from the GRAPHQL API</div>
      <div>id: {project.id}</div>
      <div>title: {project.title}</div>
      <div>description: {project.description}</div>
      <div>learning objectives: {project.learning_objectives}</div>
    </div>
  );

};

export default ProjectDetailsPage;
