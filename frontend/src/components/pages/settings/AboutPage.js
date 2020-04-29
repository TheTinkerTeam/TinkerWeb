import React, { useState } from "react";
import {
  Button,
  Form,
  Header,
  Segment,
} from "semantic-ui-react";
import { useForm} from "react-hook-form";

// import { gql } from "apollo-boost";
// import { useMutation } from "@apollo/react-hooks";

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

const AboutPage = ({ userInfo }) => {
  console.log({ userInfo });
  const { register, handleSubmit, errors } = useForm();

  const [interestsList, setInterestsList] = useState([]);

  const handleChange = (e, r) => {
    // console.log({ e });
    // console.log("value", r.value);
    setInterestsList([r.value]);
  };

  const onSubmit = (data) => {
    console.log("interest submitted = ", interestsList[0]);
    console.log({ data });
    // updateUser({
    //   variables: {
    //     uid: userInfo.uid,
    //     school: data.school,
    //     role: data.role,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //   },
    // });
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
              defaultValue={[]}
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
              {errors.description && <span>Country is required</span>}
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
