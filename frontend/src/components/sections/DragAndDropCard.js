import React from "react";

const DragAndDropCard = props => {
  const { teamId, studentId } = props;

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData(
      "card",
      JSON.stringify({
        card_id: target.id,
        teamId: teamId,
        studentId: studentId,
        origin: target.parentNode.id
      })
    );
  };

  const dragOver = e => {
    // e.preventDefault();
    e.stopPropagation();
  };

  const dragEnd = e => {
    e.preventDefault();

    // console.log(e.target.className);

    // if (e.target.className === "test") {
    // 	setTimeout(() => {
    // 		e.target.style.display = "visible";
    // 	  }, 0);
    // }
    // console.log("in dragend e.dataTransfer.items:", e.dataTransfer.items);

    // const card_data = JSON.parse(e.dataTransfer.getData("card"));

    // console.log("card_data=", card_data);
    // const card_id = card_data["card_id"];
    // console.log("card_id=", card_id);

    // const card = document.getElementById(card_id);
    // card.style.display = "block";

    // const origin = document.getElementById(card_data["origin"]);

    // origin.appendChild(card);
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
};

export default DragAndDropCard;
