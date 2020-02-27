import React, { Component } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";

import { createProject } from "../../actions/projectActions";

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
    this.setState({
      imageURL: "https://via.placeholder.com/150"
    });
    createProject(this.state);
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
      <div style={{ gridColumn: "1/6", padding: "20px" }}>
        <h2>Create a project</h2>
        <hr style={{ marginBottom: "20px" }} />
        <Form size="medium" onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Project Title</label>
            <input
              name="title"
              onChange={this.handleInputChange}
              value={title}
              placeholder="Project Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              name="description"
              onChange={this.handleInputChange}
              value={description}
              placeholder="Project Description"
            />
          </Form.Field>
          <Form.Field>
            <label>Learning Objectives</label>
            <input
              name="learning_objectives"
              onChange={this.handleInputChange}
              value={learning_objectives}
              placeholder="Write the Learning Objectives"
            />
          </Form.Field>
          <Form.Field>
            <label>Subject</label>
            <input
              name="subjects"
              onChange={this.handleInputChange}
              value={subjects}
              placeholder="Enter the subject of the project"
            />
          </Form.Field>
          <Form.Field>
            <label>Tags</label>
            <input
              name="tags"
              onChange={this.handleInputChange}
              value={tags}
              placeholder="Enter the tags"
            />
          </Form.Field>
          <Form.Field>
            <label>Grade</label>
            <input
              name="grades"
              onChange={this.handleInputChange}
              value={grades}
              placeholder="What's your class grade?"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  createProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
