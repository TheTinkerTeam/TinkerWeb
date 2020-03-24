import React, { useState } from "react";

const DragAndDropCard = props => {
//   const isDragged = false;

//   const [isDragged, setFlag] = useState(false);

//   const handleDragChange = () => {
// 	  setFlag(true);
//   }

  const dragStart = e => {
    const target = e.target;

    // e.dataTransfer.setData("card_id", target.id);

    e.dataTransfer.setData(
      "card",
      JSON.stringify({ card_id: target.id, origin: target.parentNode.id })
    );

    setTimeout(() => {
      target.style.display = "visible";
    }, 0);
  };

  const dragOver = e => {
	// e.preventDefault();
    e.stopPropagation();
  };

  const dragEnd = e => {

    console.log("dragEnd");

	e.preventDefault();

	console.log(e.target.className);

	if (e.target.className === "test") {
		setTimeout(() => {
			e.target.style.display = "visible";
		  }, 0);
	}
    console.log("in dragend e.dataTransfer.items:", e.dataTransfer.items);

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
