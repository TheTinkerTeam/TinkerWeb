import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const interests = [
  { key: "wood working", text: "Wood Working", value: "wood working" },
  { key: "coding", text: "Coding", value: "coding" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
  { key: "science", text: "Science", value: "science" },
  { key: "art", text: "Art", value: "art" },
];

const UPDATE_USER = gql`
  mutation UpdateUser(
    $uid: String!
    $description: String
    $interests: [String]
    $country: String
  ) {
    updateUser(
      uid: $uid
      description: $description
      interests: $interests
      country: $country
    ) {
      uid
      description
      interests
      country
    }
  }
`;

const GET_CURRENT_USER = gql`
  query GetCurrentUser($uid: String!) {
    user(uid: $uid) {
      uid
      email
      firstName
      lastName
      username
      school
      role
      description
      interests
      country
    }
  }
`;

const AboutPage = ({ currentUser, userInfo }) => {
  console.log({ userInfo });

  const [updateUser] = useMutation(UPDATE_USER);

  const { register, handleSubmit, errors } = useForm();

  let initialInterests;
  if (userInfo && userInfo["interests"]) {
    console.log("userInfo[interests]", userInfo["interests"]);
    initialInterests = userInfo["interests"];
  } else {
    initialInterests = [];
  }

  console.log("initialInterests", initialInterests);

  const [interestsList, setInterestsList] = useState(initialInterests);

  const handleChange = (e, r) => {
    // console.log({ r });
    // console.log("value", r.value);
    setInterestsList(r.value);
  };

  const onSubmit = (data) => {
    // console.log("interest submitted = ", interestsList);
    // console.log({ data });
    const interests = interestsList;
    const description = data.description;
    const country = data.country;
    // console.log({ interests });
    // console.log({ description });
    // console.log({ country });
    updateUser({
      variables: {
        uid: userInfo.uid,
        description: description,
        interests: interests,
        country: country,
      },
      refetchQueries: [
        {
          query: GET_CURRENT_USER,
          variables: { uid: `${currentUser.uid}` },
        },
      ],
    });
  };

  return (
    <Segment>
      <div>{interestsList}</div>
      <Header dividing size='large' content='About Me' />
      <p>Complete your profile to get the most out of this site</p>
      {userInfo && (
        <Form onSubmit={handleSubmit(onSubmit, interests)}>
          <Form.Field>
            <label>Tell us about yourself</label>
            <textarea
              name='description'
              defaultValue={userInfo.description}
              ref={register()}
              placeholder='About me'
              rows={3}
            />
            <div style={{ color: "red" }}>
              {errors.description && <span>Description is required</span>}
            </div>
          </Form.Field>

          <Form.Field>
            <label>My Interests</label>
            <Form.Dropdown
              name='interests'
              multiple
              placeholder='Select interests'
              fluid
              search
              selection
              defaultValue={interestsList}
              options={interests}
              onChange={handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Country of Origin </label>
            <input
              name='country'
              defaultValue={userInfo.country}
              ref={register()}
              placeholder='Where do you come from?'
            />
            <div style={{ color: "red" }}>
              {errors.country && <span>Country is required</span>}
            </div>
          </Form.Field>

          <Button size='large' positive type='submit'>
            Update Profile
          </Button>
        </Form>
      )}
    </Segment>
  );
};

export default AboutPage;
