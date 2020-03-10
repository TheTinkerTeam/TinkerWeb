import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Segment, Divider, Container, List } from "semantic-ui-react";

//https://www.apollographql.com/docs/react/data/queries/

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
      <div className='project-title-style'>{project.title}</div>
      <Segment.Group className='paragraph-style display-in-box'>
        <Segment>
          <div className='paragraph-title-style'>{"About this project".toUpperCase()}</div>
          <br />
          <div>{project.description}</div>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>{"Topics".toUpperCase()}</div>
          <br />
          import the topics from the database
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>{"Standards".toUpperCase()}</div>
          <br />
          import the standards from the database
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>{"Learning Objectives".toUpperCase()}</div>
          <br />
          <div>{project.learning_objectives}</div>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>{"Getting started".toUpperCase()}</div>
          <br />
          <div>
            1. Show the “The One Moment” music video.
            <br /> Get students excited about the STEAM concepts in this video.
            <br />
            <br /> 2. Go to OKGoSandbox.org and play the “Timing is Everything
            Challenge” video.
            <br /> This video will outline the challenge and explain OK Go's
            creative thinking behind the music video “The One Moment.”
            <br />
            <br /> 3. Go to OKGoSandbox.org and play the “The One Moment Q&A”
            video.
            <br /> In this Q&A, OK Go explains the creative and scientific
            processes they went through to create the music video “The One
            Moment.” The Q&A can be shown before the challenge to inspire
            students, or after to answer any lingering questions they have.
          </div>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>{"Materials".toUpperCase()}</div>
          <br />
          <List bulleted>
            <List.Item>Paper</List.Item>
            <List.Item>Cardboard</List.Item>
            <List.Item>Paper Clip</List.Item>
            <List.Item>Shoe</List.Item>
            <List.Item>Tissue</List.Item>
          </List>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>PART ONE: INQUIRY</div>
          <br />
          <div>
            Discover the rate that different objects fall at
            <br />
            Have students collect objects from around the classroom and describe
            their size, mass, texture, and other properties on the “Timing is
            Everything” worksheet. Students should then test how fast or slow an
            object falls from a particular height
            <br />
            If students have access to a device that can record in slow-motion,
            then they should record a slow motion video of two different objects
            being dropped at the same time. If students don’t have access to a
            camera with slow-motion, they should instead very carefully watch
            the impacts and take notes describing the impact of each object.
            Students should share why the objects fell at the rates they did and
            any other applicable results
          </div>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>PART TWO: CHALLENGE</div>
          <br />
          <div>
            Have two objects hit the floor at the same time
            <br />
            Have students pick two of the objects they have collected. Ask them
            to select two different fixed heights to drop them from. They should
            work together to time their drops so that both objects land at the
            same time.
            <br />
            Encourage students to keep track of how high the objects fell from
            and how quickly they fell. Once they have completed the challenge
            2-3 times, use the guiding questions below to lead discussion on
            what affects the speed at which things fall.
          </div>
        </Segment>
        <Segment>
          <div className='paragraph-title-style'>GUIDING QUESTIONS</div>
          <br />
          <div>
            What did you learn about gravity in this activity?
            <br />
            What objects fell the fastest? The slowest?
            <br />
            Which physical property had the greatest effect on the speed of each
            falling object?
            <br />
            Could you get two different objects to hit the ground at the same
            time? What did you have to change to accomplish this?
          </div>
        </Segment>
      </Segment.Group>
    </div>
  );
};

export default ProjectDetailsPage;
