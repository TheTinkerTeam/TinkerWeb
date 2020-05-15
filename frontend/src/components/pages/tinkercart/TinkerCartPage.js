import React from "react";
import tinkercartimage from "../../../img/tinkercartPlus.png";
import { Image, Icon } from "semantic-ui-react";

const TinkerCartPage = () => {
  return (
    <div>
      <div className='classrooms-title-container'>
        <div className='classroom-title-style' style={{ textAlign: "center" }}>
         {"Smart Inventory + Marketplace "}
          <Icon name='shopping basket' />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={tinkercartimage}
          style={{ width: "50%", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default TinkerCartPage;
