import React, { Fragment, useState, useEffect } from "react";
import avatar from "../../img/avatar.png";
import { Image } from "semantic-ui-react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_CURRENT_USER = gql`
  query GetCurrentUser($uid: String!) {
    user(uid: $uid) {
      uid
      username
      role
      avatar
    }
  }
`;

const AvatarImage = ({ profile }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { uid: `${profile.uid}` },
  });

  console.log({ data });
  // let avatarURL;
  if (loading) return <Fragment></Fragment>;

  const avatarURL = data.user.avatar;

  return (
    <Fragment>
      <Image
        avatar
        spaced='right'
        //src={
        //(profile && profile.avatar === "defaultImgUrl" && avatar) ||
        //(profile && profile.avatar) ||
        //avatar
        //}
        src={avatarURL === "defaultImgUrl" && avatar || avatarURL || avatar}
      />
    </Fragment>
  );
};

export default AvatarImage;
