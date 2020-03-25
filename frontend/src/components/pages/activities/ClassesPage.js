import React, { Component, useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";

const GET_CLASSES = gql`
  query {
    classrooms {
      id
    }
  }
`;

const ClassesPage = props => {
  const { loading, error, data } = useQuery(GET_CLASSES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const classes = data.classes;

  return (
    <div>
      {classes.map(singleClass => {
        return <div>{singleClass.title}</div>;
      })}
    </div>
  );
};

export default ClassesPage;
