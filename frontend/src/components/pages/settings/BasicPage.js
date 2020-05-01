import React, { Fragment, useState } from "react";
import { Form, Button } from "semantic-ui-react";

import { useForm } from "react-hook-form";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const UPDATE_USER = gql`
  mutation UpdateUser(
    $uid: String!
    $school: String
    $role: String
    $firstName: String
    $lastName: String
  ) {
    updateUser(
      uid: $uid
      school: $school
      role: $role
      firstName: $firstName
      lastName: $lastName
    ) {
      uid
      school
      role
      firstName
      lastName
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
    }
  }
`;

const roleOptions = [
  { key: "teacher", text: "Teacher", value: "teacher" },
  { key: "student", text: "Student", value: "student" },
  { key: "admin", text: "Admin", value: "admin" },
];

const BasicPage = ({ currentUser, userInfo }) => {
  const [updateUser] = useMutation(UPDATE_USER);

  const { register, handleSubmit, errors } = useForm();

  let initialRole;
  if (userInfo && userInfo["role"]) {
    // console.log("userInfo['role']", userInfo["role"] )
    initialRole = userInfo["role"];
  } else {
    // console.log("no initial role")
    initialRole = [];
  }

  const [roleState, setRoleState] = useState(initialRole);

  const handleChange = (e, r) => {
    // console.log({r})
    // console.log("r.value:", r.value)
    setRoleState(r.value);
  };

  const onSubmit = (data) => {
    // console.log({ data });
    updateUser({
      variables: {
        uid: userInfo.uid,
        school: data.school,
        //role: data.role,
        role: roleState,
        firstName: data.firstName,
        lastName: data.lastName,
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
    <Fragment>
      {userInfo && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>First Name</label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              name='firstName'
              defaultValue={userInfo.firstName}
              ref={register({ required: true })}
              placeholder='Enter your firstname'
            />
            {/* errors will return when field validation fails  */}
            <div style={{ color: "red" }}>
              {errors.firstName && <span>Firstname is required</span>}
            </div>
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <input
              name='lastName'
              defaultValue={userInfo.lastName}
              ref={register({ required: true })}
              placeholder='Enter your lastname'
            />
            <div>{errors.lastName && <span>Lastname is required</span>}</div>
          </Form.Field>

          <Form.Field>
            <label>Role</label>
            <Form.Dropdown
              name='role'
              placeholder='Select you role'
              fluid
              search
              selection
              defaultValue={userInfo.role}
              options={roleOptions}
              onChange={handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label>School</label>
            <input
              name='school'
              defaultValue={userInfo.school || ""}
              ref={register({ required: true })}
              placeholder='Enter your school name'
            />
            <div>
              {errors.school && <span>The school name is required</span>}
            </div>
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      )}
    </Fragment>
  );
};

export default BasicPage;
