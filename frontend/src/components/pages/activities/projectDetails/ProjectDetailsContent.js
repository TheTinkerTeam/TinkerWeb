import React from "react";
import ProjectDetailsContentPart from "./ProjectDetailsContentPart";
import { Segment } from "semantic-ui-react";

const ProjectDetailsContent = ({
  partOneFindingOut,
  partTwoWorkingWithIdeas,
  partThreeMakingItHappen,
  partFourEvaluatingYourSolution,
}) => {
  return (
    <Segment>
      <div className='paragraph-title-style'>{"Content".toUpperCase()}</div>
      <br />
      <ProjectDetailsContentPart
        title={"Finding Out"}
        strands={partOneFindingOut}
      />
      <br/>
      <ProjectDetailsContentPart
        title={"Working With Idea"}
        strands={partTwoWorkingWithIdeas}
      />
      <br/>
      <ProjectDetailsContentPart
        title={"Making It Happen"}
        strands={partThreeMakingItHappen}
      />
      <br/>
      <ProjectDetailsContentPart
        title={"Evaluating Your Solution"}
        strands={partFourEvaluatingYourSolution}
      />
      <br/>
    </Segment>
  );
};

export default ProjectDetailsContent;
