import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";
import { createProject } from "../../dashboard/projectsActions";

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  createProject
};

class ProjectForm extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    learning_objectives: "",
    subjects: [],
    tags: [],
    grades: []
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    window.scrollTo(0, 0);
    console.log(this.state);
    this.setState(
      {
        id: cuid(),
        imageURL: "https://via.placeholder.com/150"
      },
      () => {
        console.log(this.props.createProject(this.state));
      }
    );
  };

  handleInputChange = ({ target: { name, value } }) => {
    if (name === "tags") {
      value = [value];
    }
    if (name === "subjects") {
      value = [value];
    }
    if (name === "grades") {
      value = [value];
    }

    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      title,
      description,
      learning_objectives,
      subjects,
      tags,
      grades
    } = this.state;

    return (
      <div style={{ "gridColumn": "1/6" }}>
        <hr color='#181C3F' />
        <h1>Create a project TEST</h1>
        <Segment>
          <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
            <Form.Field>
              <label>Project Title</label>
              <input
                name='title'
                onChange={this.handleInputChange}
                value={title}
                placeholder='Project Title'
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input
                name='description'
                onChange={this.handleInputChange}
                value={description}
                placeholder='Project Description'
              />
            </Form.Field>
            <Form.Field>
              <label>Learning Objectives</label>
              <input
                name='learning_objectives'
                onChange={this.handleInputChange}
                value={learning_objectives}
                placeholder='Write the Learning Objectives'
              />
            </Form.Field>
            <Form.Field>
              <label>Subject</label>
              <input
                name='subjects'
                onChange={this.handleInputChange}
                value={subjects}
                placeholder='Enter the subject of the project'
              />
            </Form.Field>
            <Form.Field>
              <label>Tags</label>
              <input
                name='tags'
                onChange={this.handleInputChange}
                value={tags}
                placeholder='Enter the tags'
              />
            </Form.Field>
            <Form.Field>
              <label>Grade</label>
              <input
                name='grades'
                onChange={this.handleInputChange}
                value={grades}
                placeholder="What's your class grade?"
              />
            </Form.Field>
            <Button positive type='submit'>
              Submit
            </Button>
            <Button type='button'>Cancel</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
