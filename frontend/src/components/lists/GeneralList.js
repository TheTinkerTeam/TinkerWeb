import React from "react";
import GeneralItem from "../items/GeneralItem";
import { List } from "semantic-ui-react";

const GeneralList = ({ array }) => {
  return (
    <List>
      {array &&
        array.map((item, index) => (
          <GeneralItem key={index} item={item} />
        ))}
    </List>
  );
};

export default GeneralList;
