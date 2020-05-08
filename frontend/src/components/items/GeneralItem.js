import React from "react";
import { Item, Icon } from "semantic-ui-react";

const GeneralItem = ({ item }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Item>
      <Icon name='heart' />
      <Item.Content>{capitalize(`${item}`)}</Item.Content>
    </Item>
  );
};

export default GeneralItem;
