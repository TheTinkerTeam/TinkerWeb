import React from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CLASSES = gql`
  query {
    classrooms {
      id
    }
  }
`;

const ClassesPage = () => {
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
