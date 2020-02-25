import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setAlert } from "../../actions/alertActions";
import { signup } from "../../actions/authActions";

const Signup = ({ setAlert, signup }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const { email, username, password } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    signup({ email, username, password });
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Sign Up</h2>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="submit"
          placeholder="Submit"
          name="submit"
          value="Signup"
          required
        />
      </form>
    </Fragment>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { setAlert, signup })(Signup);
