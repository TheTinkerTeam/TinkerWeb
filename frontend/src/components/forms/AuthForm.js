import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Form, Button, Message } from "semantic-ui-react";

import { login } from "../../actions/authActions";

const AuthForm = ({ login }) => {
  //const [state, setState] = useState(initialState);

  const initialState = {
    position: "email",
    template: "input"
  };

  const [state, setState] = useState(initialState);

  const initialUser = {
    email: "",
    newUser: null,
    userType: "",
    username: "",
    password: ""
  };

  const [user, setUser] = useState(initialUser);

  const initialInputs = [];
  const initialButtons = [];

  const [inputs, setInputs] = useState(initialInputs);
  const [buttons, setButtons] = useState(initialButtons);

  useEffect(() => {
    let newState;
    let newInputs;
    let newButtons;
    switch (state.position) {
      case "email":
        newState = {};
        newInputs = [
          {
            name: "email",
            label: "First, enter your email",
            type: "input",
            placeholder: "name@example.com"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "code":
        newState = {};
        newInputs = [
          {
            name: "code",
            label: "Check your email!",
            type: "input",
            placeholder: "Enter code here"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "password":
        newState = {};
        newInputs = [
          {
            name: "password",
            label: "New Account, enter your password",
            type: "password",
            placeholder: "***"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      default:
    }
    setState({
      ...state,
      ...newState
    });
    setInputs(newInputs);
    setButtons(newButtons);
  }, [state.position]);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    switch (state.position) {
      case "email":
        setState({
          ...state,
          position: "userType"
        });
        break;
      case "userType":
        setState({
          ...state,
          position: ""
        });
        break;
      default:
        setState({
          ...state
        });
        break;
    }
  };

  const templates = {
    input: {
      inputs: inputs.map(input => (
        <Fragment>
          <Form.Input
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={state[input.name]}
            onChange={handleChange}
          />
        </Fragment>
      )),
      buttons: buttons.map(button => (
        <Button fluid size="massive" positive type="submit">
          {button.text}
        </Button>
      ))
    }
  };

  return (
    <Form
      size="massive"
      onSubmit={e => {
        handleSubmit(e);
      }}
      autoComplete="off"
    >
      {templates[state.template].inputs}
      {templates[state.template].buttons}
    </Form>
  );
};

AuthForm.propTypes = {};

const mapStateToProps = null;

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
