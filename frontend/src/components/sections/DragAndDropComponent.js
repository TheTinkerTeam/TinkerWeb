import React from "react";

const DragAndDropComponent = props => {
  const updateTeams = oldTeams => {};

  const drop = e => {
    e.preventDefault();

    // console.log('drop');
    // console.log(e.dataTransfer.items);

    const card_data = JSON.parse(e.dataTransfer.getData("card"));
    // console.log("card_data=", card_data);

    const card_id = card_data["card_id"];
    // console.log("card_id=", card_id);

    const card = document.getElementById(card_id);
    // card.style.display = "block";
    // console.log(e.target)
    if (e.target.className == "board") {
        e.target.appendChild(card);
    }

    console.log("props.teams:", props.teams);

    // props.makeTeams();

    // updateTeams(props.teams);
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
      {console.log("propchildren", props.children)}
      {props.children}
    </div>
  );
};

export default DragAndDropComponent;
