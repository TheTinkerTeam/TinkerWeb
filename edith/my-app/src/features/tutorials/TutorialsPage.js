import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import CategoryBubblesList from "../projects/categoriesBubbleComponent/CategoryBubblesList";
import TutoDisplayedList from "./TutoDisplayedList";
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  tutorials: state.tutorials
})

const tutoCatFromDatabase = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "3D printing"
  },
  {
    id: "3",
    name: "Wood-working"
  },
  {
    id: "4",
    name: "Laser Cutting"
  },
  {
    id: "5",
    name: "Software"
  },
  {
    id: "6",
    name: "Coding"
  }
];

class TutorialsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutoCat: tutoCatFromDatabase,
      activeItems: ["All"]
    };
  }
  handleSelection = category => {
    if (this.state.activeItems.includes("All")) {
      this.setState(({ activeItems }) => ({
        activeItems: [
          ...activeItems.filter(activeItems => activeItems !== "All"),
          category.name
        ]
      }));
    } else {
      if (category.name === "All") {
        this.setState(({ activeItems }) => ({
          activeItems: ["All"]
        }));
      } else {
        this.setState(({ activeItems }) => ({
          activeItems: [...activeItems, category.name]
        }));
      }
    }
  };

  handleUnselection = name => {
    if (this.state.activeItems.includes("All")) {
      this.setState(({ activeItems }) => ({
        activeItems: activeItems.filter(activeItems => activeItems === "All")
      }));
    } else {
      this.setState(({ activeItems }) => ({
        activeItems: activeItems.filter(
          activeItems => activeItems !== name //returns the elements of the array that does not match the name that we are passing in our parameter
        )
      }));
    }
  };

  componentDidUpdate() {
    if (this.state.activeItems.length === 0) {
      this.setState(({ activeItems }) => ({
        activeItems: ["All"]
      }));
    }
  }

  render() {
    const { tutoCat, activeItems } = this.state;

    const { tutorials } = this.props;

    return (
      <div className='projects-container'>
        <div className='red-title rotate-title'>
          <span>Super </span>
          <span className='superprojects-text'>Tutor</span>
          <span className='superprojects-text' id='supertinker-i'>
            i
          </span>
          <span className='superprojects-text'>als</span>
        </div>
        <div className='projects-card'>
          <div>
            <Input
              className='icon'
              icon='search'
              placeholder='Search...'
              id='search-bar-projects'
            />
          </div>
          <CategoryBubblesList
            categories={tutoCat}
            activeItems={activeItems}
            handleSelection={this.handleSelection}
            handleUnselection={this.handleUnselection}
          />
          <TutoDisplayedList tutorials={tutorials} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TutorialsPage);
