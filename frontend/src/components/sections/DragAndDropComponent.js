import React from "react";

const DragAndDropComponent = props => {
  const { teamId, onChange } = props;

  const drop = e => {
    e.preventDefault();

    const cardData = JSON.parse(e.dataTransfer.getData("card"));

    const studentId = cardData["studentId"];
    const originTeamId = cardData["teamId"];

    onChange(studentId, originTeamId, teamId);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default DragAndDropComponent;
