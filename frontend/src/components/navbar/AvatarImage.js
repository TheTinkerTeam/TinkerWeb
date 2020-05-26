import React, { Fragment } from "react";
import avatar from "../../img/avatar.png";
import { Image } from "semantic-ui-react";

// import { gql } from "apollo-boost";
// import { useQuery } from "@apollo/react-hooks";

// const GET_CURRENT_USER = gql`
//   query GetCurrentUser($uid: String!) {
//     user(uid: $uid) {
//       uid
//       username
//       role
//       avatar
//     }
//   }
// `;

const AvatarImage = ({ profile }) => {
  // const { loading, error, data } = useQuery(GET_CURRENT_USER, {
  //   variables: { uid: `${profile.uid}` },
  // });

  // console.log({ data });
  // if (error) {
  //   console.log(error);
  // }
  // if (loading) return <Fragment></Fragment>;

  // let avatarURL = avatar;
  // if (data && data.user) {
  //   avatarURL = data.user.avatar;
  // }

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
        src={(profile.avatar === "defaultImgUrl" && avatar) || profile.avatar || avatar}
      />
    </Fragment>
  );
};

export default AvatarImage;
