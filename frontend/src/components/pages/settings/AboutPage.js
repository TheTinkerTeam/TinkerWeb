import React, { useState, useEffect } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

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
      id
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
      id
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
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    variables: { uid: `${currentUser.uid}` },
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const { register, handleSubmit, errors } = useForm();

  console.log(userInfo)
  let initialInterests;
  if (userInfo && userInfo.interests) {
    initialInterests = userInfo.interests;
  } else {
    initialInterests = [];
  }

  const [interestsList, setInterestsList] = useState(initialInterests);

  useEffect(() => {
    setInterestsList(initialInterests)
  }, [initialInterests]);

  if(loading) {return <div>Loading...</div>}
  if(error) {return <div>Error :( ...</div>}

  console.log("interestsList",interestsList)

  const handleChange = (e, r) => {
    setInterestsList(r.value);
  };

  const onSubmit = (data) => {
    const interests = interestsList;
    const description = data.description;
    const country = data.country;

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
          options: { fetchPolicy: 'no-cache' }
        },
      ],
    });
  };

  return (
    <Segment>
      <Header dividing size='large' content='About Me' />
      <p>Complete your profile to get the most out of this site</p>
      {userInfo && (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={userInfo.interests}
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
