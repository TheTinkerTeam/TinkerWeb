import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../../actions/projectActions";

class ProjectDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
  }

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;

    console.log(projects);

    return (
      <div>
        <h1>This is the ProjectDetails Page</h1>
        <div>I am trying to display the project details from Redux</div>
        {/* <div>{projects[0].title }</div> */}
        <div>{this.routeParam}</div>
        {/* <div>{projects[0].learning_objectives}</div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage);
