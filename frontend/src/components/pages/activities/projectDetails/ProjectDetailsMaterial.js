import React from "react";
import { List, Segment } from "semantic-ui-react";

const ProjectDetailsMaterial = ({
  buildingSupplies,
  upcycledSupplies,
  tools,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Segment>
      {/* <div className='paragraph-title-style'>{"Material".toUpperCase()}</div>
      <br /> */}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ marginRight: "10em" }}>
          <div className='paragraph-title-style'>
            {"Building Material".toUpperCase()}
          </div>
          {buildingSupplies &&
            buildingSupplies.map((supply, index) => (
              <List bulleted key={index}>
                <List.Item>{capitalize(`${supply.name}`)}</List.Item>
              </List>
            ))}
        </div>
        <div style={{ marginRight: "10em" }}>
          <div className='paragraph-title-style'>
            {"Upcycled Material".toUpperCase()}
          </div>
          {upcycledSupplies &&
            upcycledSupplies.map((supply, index) => (
              <List bulleted key={index}>
                <List.Item>{capitalize(`${supply.name}`)}</List.Item>
              </List>
            ))}
        </div>
        <div style={{marginRight: "10em"}}>
          <div className='paragraph-title-style'>{"Tools".toUpperCase()}</div>
          {tools &&
            tools.map((supply, index) => (
              <List bulleted key={index}>
                <List.Item>{capitalize(`${supply.name}`)}</List.Item>
              </List>
            ))}
        </div>
      </div>
    </Segment>
  );
};

export default ProjectDetailsMaterial;
