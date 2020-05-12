import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Segment } from "semantic-ui-react";
import ProjectDetailsStandards from "./ProjectDetailsStandards";
// import ProjectDetailsLearningObjectives from "./ProjectDetailsLearningObjectives";
import ProjectDetailsSubjects from "./ProjectDetailsSubjects";
import ProjectDetailsKeyConcepts from "./ProjectDetailsKeyConcepts";
import ProjectDetailsKeyQuestion from "./ProjectDetailsKeyQuestion";
import ProjectDetailsBigIdea from "./ProjectDetailsBigIdea";
import ProjectDetailsImage from "./ProjectDetailsImage";
import ProjectDetailsMaterial from "./ProjectDetailsMaterial";
import ProjectDetailsContent from "./ProjectDetailsContent";
import ProjectDetailsSafety from "./ProjectDetailsSafety";

//https://www.apollographql.com/docs/react/data/queries/

const ProjectDetailsPage = (props) => {
  const routeParam = props.match.params.id;
  // console.log(routeParam);

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
        bigIdea
        keyConcepts
        keyQuestion
        standards {
          id
          code
          description
          skills
        }
        buildingSupplies {
          id
          name
          type
          available
        }
        upcycledSupplies {
          id
          name
          type
          available
        }
        tools {
          id
          name
          type
          available
        }
        partOneFindingOut
        partTwoWorkingWithIdeas
        partThreeMakingItHappen
        partFourEvaluatingYourSolution
        hints
        safety
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: routeParam },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const project = data.project;
  console.log(project);
  if (!project) {
    return (
      <Redirect
        push
        to={{
          pathname: "/",
          state: { alert: "No Such Project" },
        }}
      />
    );
  }

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className='project-title-style'>{project.title}</div>
      <Segment.Group className='paragraph-style display-in-box'>
        <ProjectDetailsImage props={props} image={project.imageURL} title={project.title}/>
        <ProjectDetailsBigIdea bigIdea={project.bigIdea} />
        <ProjectDetailsKeyQuestion keyQuestion={project.keyQuestion} />
        <ProjectDetailsKeyConcepts keyConcepts={project.keyConcepts} />
        <ProjectDetailsSubjects subjects={project.subjects} />
        <ProjectDetailsStandards standards={project.standards} />
        {/* <ProjectDetailsLearningObjectives
          learningObjectives={project.learning_objectives}
        /> */}
        <ProjectDetailsMaterial
          buildingSupplies={project.buildingSupplies}
          upcycledSupplies={project.upcycledSupplies}
          tools={project.tools}
        />
        <ProjectDetailsContent
          partOneFindingOut={project.partOneFindingOut}
          partTwoWorkingWithIdeas={project.partTwoWorkingWithIdeas}
          partThreeMakingItHappen={project.partThreeMakingItHappen}
          partFourEvaluatingYourSolution={
            project.partFourEvaluatingYourSolution
          }
        />
        <ProjectDetailsSafety safety={project.safety} />
      </Segment.Group>
    </div>
  );
};

// String.prototype.capitalize = function() {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

export default withRouter(ProjectDetailsPage);
