import React from "react";
import { Segment, Button, Grid, Form, List, Icon } from "semantic-ui-react";

const WorkspaceSection = ({
  props,
  isWorkspaceActive,
  toggleWorkspaceButton,
  handleSubmitTask,
  capitalize,
  currentTask,
  handleChange,
  tasksList,
  currentProject,
  userProfile,
}) => {
  // style={{ backgroundImage: `url(${currentProject.imageURL})` }}
  let backgroundImage;
  let minHeight;
  if (currentProject) {
    backgroundImage = `url(${currentProject.imageURL})`;
  } else {
    backgroundImage = `url("https://firebasestorage.googleapis.com/v0/b/supertinker.appspot.com/o/aaa_projects_illustrations%2Fempty.png?alt=media&token=407ac0d3-3bf1-4120-a2ac-c8edffe3f934")`;
    minHeight = "250px";
  }

  return (
    <Segment.Group className='paragraph-style display-in-box'>
      <Segment className='section-title'>
        <div className='flexbox-container'>
          <div>WORKSPACE</div>

          {isWorkspaceActive ? (
            <Button
              className='arrow-down-button-classroom'
              circular
              icon='angle up'
              onClick={toggleWorkspaceButton}
            />
          ) : (
            <Button
              className='arrow-down-button-classroom'
              circular
              icon='angle down'
              onClick={toggleWorkspaceButton}
            />
          )}
        </div>
      </Segment>

      {isWorkspaceActive && (
        <Segment>
          {/* <List bulleted>
              <div>What's in this section?</div>
              <List.Item>Current project</List.Item>
              <List.Item>
                Possibility to post assignements, homework, messages to the
                class
              </List.Item>
              <List.Item>Archived projects</List.Item>
            </List> */}

          <Segment className='currentProjectContainer inWorkspaceContainer'>
            <Grid
              //as={Link}
              //to={"/"}
              className='currentProjectGrid'
              stackable
              columns={2}
              onClick={() => {
                console.log("redirect");
                if (currentProject) {
                  props.history.push(`/projects/${currentProject.id}`);
                } else {
                  props.history.push(`/projects`);
                }
              }}
            >
              <Grid.Column
                //style={{ backgroundImage: `url(${currentProject.imageURL})` }}
                style={{
                  backgroundImage: backgroundImage,
                  minHeight: minHeight,
                }}
                width={4}
              ></Grid.Column>
              <Grid.Column width={12}>
                <Segment className='currentProjectColumn'>
                  {!currentProject && (
                    <div>
                      No current project selected.
                      <br />
                      <br />
                      Assign a project to your class{" "}
                      <Icon name='heart outline' />
                    </div>
                  )}
                  {currentProject && (
                    <div>
                      <strong>
                        {`Current Project: ${currentProject.title}`.toUpperCase()}
                      </strong>
                    </div>
                  )}
                  {/* <br /> */}
                  {currentProject && <div>{currentProject.bigIdea}</div>}
                  <br />
                  {currentProject && (
                    <div>
                      <div className=''>
                        <strong>{"Key Concepts".toUpperCase()}</strong>
                      </div>

                      <div>
                        {currentProject.keyConcepts.map((concept, index) => (
                          <span key={index}>
                            {concept}{" "}
                            {index + 1 !== currentProject.keyConcepts.length &&
                              " — "}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <br />
                  {currentProject && (
                    <div>
                      <div className=''>
                        <strong>{"Key Question".toUpperCase()}</strong>
                      </div>
                      <div>{currentProject.keyQuestion}</div>
                    </div>
                  )}
                  <br />
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>

          {isWorkspaceActive && (
            <div>
              {userProfile && userProfile.role === "teacher" && (
                <Form
                  autoComplete='off'
                  onSubmit={handleSubmitTask}
                  className='newStudentInput'
                >
                  <Form.Group
                    style={{ marginTop: "4em", marginBottom: "1.5em" }}
                  >
                    <Form.Input
                      placeholder='Share a message with your students'
                      name='currentTask'
                      value={currentTask}
                      onChange={handleChange}
                      style={{ width: "400px" }}
                    />
                    <Form.Button content='Post' />
                  </Form.Group>
                </Form>
              )}
              {tasksList && tasksList.length === 0 ? (
                <div>
                  No task assigned! <Icon name='heart outline' />
                </div>
              ) : (
                tasksList.map((task, index) => (
                  <Segment
                    className='feedContainer inWorkspaceContainer'
                    key={index}
                  >
                    <List.Item>{capitalize(`${task}`)}</List.Item>
                  </Segment>
                ))
              )}
            </div>
          )}
          {/* <Segment className='feedContainer inWorkspaceContainer'>Feed</Segment> */}
        </Segment>
      )}
    </Segment.Group>
  );
};

export default WorkspaceSection;
