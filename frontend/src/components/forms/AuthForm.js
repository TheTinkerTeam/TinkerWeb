import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Form, Button } from "semantic-ui-react";

import { login } from "../../actions/authActions";

const AuthForm = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Form
      onSubmit={e => {
        // signIn();
        // close();
        handleFormSubmit(e);
      }}
      autoComplete="off"
    >
      <Form.Field>
        <label>Username</label>
        <input
          name="username"
          onChange={e => onChange(e)}
          value={username}
          placeholder="Username or Email"
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          name="password"
          onChange={e => onChange(e)}
          value={password}
          placeholder="Password"
          required
        />
      </Form.Field>
      <Button positive type="submit">
        Sign In
      </Button>
    </Form>
  );
};

AuthForm.propTypes = {};

const mapStateToProps = null;

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
