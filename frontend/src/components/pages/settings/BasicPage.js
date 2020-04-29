import React, { Fragment } from "react";
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
    }
  }
`;

const BasicPage = ({ userInfo }) => {
  // const { register, handleSubmit, watch, errors } = useForm();
  const [updateUser] = useMutation(UPDATE_USER);
  // console.log(updateUser);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
    updateUser({
      variables: {
        uid: userInfo.uid,
        school: data.school,
        role: data.role,
        firstName: data.firstName,
        lastName: data.lastName,
      },
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
            <select name='role' ref={register} defaultValue={userInfo.role}>
              <option value='teacher'>Teacher</option>
              <option value='student'>Student</option>
              <option value='Admin'>Admin</option>
            </select>
            <div>{errors.role && <span>This field is required</span>}</div>
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
