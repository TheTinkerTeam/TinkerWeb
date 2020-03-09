import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../../actions/projectActions";

// Link React Doc for fetching external data
// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data

class ProjectDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
  }

  state = {
    externalData: null
  };

  componentDidMount() {
    this._asyncRequest = this.props.getProjects().then(externalData => {
      this._asyncRequest = null;
      this.setState({ externalData });
    });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { projects } = this.props;

    console.log("here are the projects");
    console.log(projects);
    console.log("done");

    const project = projects.filter(project => {
      return project._id.indexOf(this.routeParam) !== -1;
    });

    console.log({project});

    if (this.state.externalData === null) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <h1>This is the ProjectDetails Page</h1>
          <div>I am trying to display the project details from Redux</div>
          <div>{project[0].title}</div>
          <div>{this.routeParam}</div>
          <div>{project[0].learning_objectives}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage);
