import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Form, Button, Message, Modal, Image, Header } from "semantic-ui-react";

import { signup, login } from "../../actions/authActions";
import checkEmail from "../../utils/checkEmail";
import Alert from "../services/Alert";

const AuthForm = ({ signup, login }) => {
  //const [state, setState] = useState(initialState);

  const initialState = {
    position: "email",
    template: "input"
  };

  const [state, setState] = useState(initialState);

  const emailExists = async email => {
    const user = await checkEmail(email);
    if (user) {
      setState({
        ...state,
        position: "login",
        template: "input"
      });
    } else {
      setState({
        ...state,
        position: "userType",
        template: "buttons"
      });
    }
  };

  const initialUser = {
    email: "",
    userType: "",
    firstName: "",
    lastName: "",
    school: "",
    password: ""
  };

  const [user, setUser] = useState(initialUser);

  const initialInputs = [];
  const initialButtons = [];

  const [inputs, setInputs] = useState(initialInputs);
  const [buttons, setButtons] = useState(initialButtons);

  useEffect(() => {
    let newInputs;
    let newButtons;
    switch (state.position) {
      case "email":
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
      case "userType":
        newInputs = [];
        newButtons = [
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "student",
                email: user.email
              });
            },
            text: "I'm a Student",
            color: "violet"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "teacher"
              });
            },
            text: "I'm a Teacher",
            color: "purple"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "school"
              });
            },
            text: "I'm a School Admin",
            color: "pink"
          }
        ];
        break;
      case "fullname":
        newInputs = [
          {
            name: "firstName",
            label: "First Name",
            type: "input",
            placeholder: "Barack"
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "input",
            placeholder: "Obama"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "school":
        newInputs = [
          {
            name: "school",
            label: "What's the name of your school",
            type: "input",
            placeholder: "Harvard"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "signup":
      case "login":
        newInputs = [
          {
            name: "password",
            label: "Enter your password",
            type: "password",
            placeholder: "***"
          }
        ];
        newButtons = [
          {
            text: "Start Tinkering"
          }
        ];
        break;
      default:
    }
    setInputs(newInputs);
    setButtons(newButtons);
  }, [state.position]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    switch (state.position) {
      case "email":
        emailExists(user.email);
        break;
      case "userType":
        setState({
          ...state,
          position: "fullname",
          template: "input"
        });
        break;
      case "fullname":
        setState({
          ...state,
          position: "school",
          template: "input"
        });
        break;
      case "school":
        setState({
          ...state,
          position: "signup",
          template: "input"
        });
        break;
      case "signup":
        console.log(user);
        signup(user);
        break;
      case "login":
        console.log(user);
        login({
          email: user.email,
          password: user.password
        });
        break;
      case "another":
        break;
      default:
        setState({
          ...state,
          position: "email",
          template: "input"
        });
        break;
    }
  };
  let template = <Fragment></Fragment>;
  if (state.template === "input") {
    template = [
      inputs.map((input, i) => (
        <Form.Input
          key={i}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          value={user[input.name] || ""}
          onChange={handleChange}
        />
      )),
      buttons.map((button, i) => (
        <Button fluid size="massive" positive type="submit" key={i}>
          {button.text}
        </Button>
      ))
    ];
  } else if (state.template === "buttons") {
    template = [
      <Button.Group widths={buttons.length} key="0">
        {buttons.map((button, i) => (
          <Button
            key={i}
            onClick={button.onClick}
            inverted
            size="massive"
            color={button.color}
            type="submit"
          >
            {button.text}
          </Button>
        ))}
      </Button.Group>
    ];
  }

  return (
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
      />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
      <Form
        size="massive"
        onSubmit={e => {
          handleSubmit(e);
        }}
        autoComplete="off"
      >
        {template}
      </Form>
      <Alert />
    </Modal.Content>
  );
};

AuthForm.propTypes = {};

const mapStateToProps = null;

const mapDispatchToProps = {
  signup,
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
