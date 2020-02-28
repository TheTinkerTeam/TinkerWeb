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
        <Form size="large" onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Input
            name="title"
            label="Project Title"
            onChange={this.handleInputChange}
            value={title}
            placeholder="Project Title"
          />
          <Form.Input
            name="description"
            label="Description"
            onChange={this.handleInputChange}
            value={description}
            placeholder="Project Description"
          />
          <Form.Input
            name="learning_objectives"
            label="Learning Objectives"
            onChange={this.handleInputChange}
            value={learning_objectives}
            placeholder="Write the Learning Objectives"
          />
          <Form.Input
            name="subjects"
            label="Subject"
            onChange={this.handleInputChange}
            value={subjects}
            placeholder="Enter the subject of the project"
          />
          <Form.Input
            name="tags"
            label="Tags"
            onChange={this.handleInputChange}
            value={tags}
            placeholder="Enter the tags"
          />
          <Form.Input
            name="grades"
            label="Grade"
            onChange={this.handleInputChange}
            value={grades}
            placeholder="What's your class grade?"
          />
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
