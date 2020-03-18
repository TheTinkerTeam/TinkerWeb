import React, { Component, useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";

const GET_CLASSES = gql`
  query {
    classes {
      title
    }
  }
`;

const ClassesPage = props => {
  const uid = useSelector(state => state.auth);
  const { loading, error, data } = useQuery(GET_CLASSES, { uid });
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
